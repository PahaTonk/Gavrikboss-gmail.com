import {
    ADD_MESSAGE,
    UPDATE_MESSAGE_TEXT
} from '../../constants';

const dialogsReducer = (state, action) => {
    /**
     * @description save message to state
     */
    const addMessage = () => {
        const messages = state.messagesInfo;
        const text = state.currentMessageText;
        const message = {
            id:  Math.floor(Math.random()*1000000),
            idUser: '',
            messageInfo: {text},
            avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
            isMyMessage: true
        };
        
        messages.push(message);
    };

    /**
     * @description save new text of the message to state
     */
    const changeMessageText = text => state.currentMessageText = text;
    
    switch(action.type) {
        case ADD_MESSAGE:
            addMessage();
            break;

        case UPDATE_MESSAGE_TEXT:
            changeMessageText(action.text);
            break;

        default: break;
    }

    return state;
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = text => ({type: UPDATE_MESSAGE_TEXT, text});

export default dialogsReducer;