import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: recieverID } = req.params;
		// console.log(req.user);
		const senderID = req.user._id;
		// console.log(senderID);
		// console.log(message);
		let conversation = await Conversation.findOne({
			participants: { $all: [senderID, recieverID] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderID, recieverID],
			});
		}

		const newMessage = new Message({
			senderID,
			recieverID,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const recieverSocketId = getReceiverSocketId(recieverID);
		if(recieverSocketId)
		{
			io.to(recieverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderID = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderID, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};