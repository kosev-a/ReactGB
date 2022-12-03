export function getMessageList(state) {
    return state.messages.messageList
}

export const selectMessagesByChatId = (chatId) => (state) => state.messages[chatId];