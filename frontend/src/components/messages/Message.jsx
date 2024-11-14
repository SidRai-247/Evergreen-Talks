import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extraxtTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = (message.senderID === authUser._id);
    const chatClassName = (fromMe ? "chat-end" : "chat-start");
    const profilePic = (fromMe ? authUser.profilePic : selectedConversation.profilePic);
    const bubbleBgColor = fromMe ? 'bg-white text-green-900' : 'bg-green-900 text-white';
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ? "shake" : "";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className='chat-footer opacity-100 text-xs flex gap-1 items-center text-white'>
            {formattedTime}</div>
        </div>
    )
};

export default Message;