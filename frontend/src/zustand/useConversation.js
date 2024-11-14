import { create } from "zustand";
// like useStore in the doc
// const useConversation = create((set) => ({
//     selectedConversation: null,
//     setSelectedConversation: (selectedConversation) => {set(selectedConversation)},
//     messages: [],
//     setMessages: (messages) => {set(messages)}
// }));

//better:
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => {
        set({ selectedConversation });
    },
    messages: [],
    setMessages: (newMessages) => {
        set((state) => ({ messages: newMessages }));
    },
}));


export default useConversation;