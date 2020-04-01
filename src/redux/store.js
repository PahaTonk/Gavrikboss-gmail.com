import {
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
    ADD_MESSAGE,
    UPDATE_MESSAGE_TEXT
} from '../constants';

const store = {
    _state: {
        dialogsState: {
            usersInfo: [
                {
                    id: 'vatson',
                    name: 'Dog Vatson',
                    friend: true,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI'
                },
                {
                    id: 'harry',
                    name: 'Cat Harry',
                    friend: false,
                    avatar: 'https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg'
                },
                {
                    id: 'jocker',
                    name: 'Dog Jocker',
                    friend: true,
                    avatar: 'https://i.forfun.com/j9k4l5lc.jpeg'
                },
                {
                    id: 'zord',
                    name: 'Dog Zord',
                    friend: true,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r'
                }
            ],
            currentMessageText: '',
            messagesInfo: [
                {
                    id:  Math.floor(Math.random()*1000000),
                    idUser: '',
                    messageInfo: {
                        text: 'Hi bro, how are you?'
                    },
                    avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
                    isMyMessage: true
                },
                {
                    id:  Math.floor(Math.random()*1000000),
                    idUser: 'vatson',
                    messageInfo: {
                        text: 'Hi, i\'m fine!'
                    },
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
                },
                {
                    id:  Math.floor(Math.random()*1000000),
                    idUser: 'vatson',
                    messageInfo: {
                        text: 'Let\'s go bark cats?'
                    },
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
                },
                {
                    id:  Math.floor(Math.random()*1000000),
                    idUser: '',
                    messageInfo: {
                        text: 'Good idea let\'s go!!!'
                    },
                    avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
                    isMyMessage: true
                },
            ]
        },
        profileState: {
            currentPostText: '',
            postsData: [
                {
                    id: Math.floor(Math.random()*1000000),
                    text: 'I\'m good boy =)',
                    likes: {
                        count: 0
                    },
                    avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg'
                },
                {
                    id: Math.floor(Math.random()*1000000),
                    text: 'Wow wow',
                    likes: {
                        count: 0
                    },
                    avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg'
                }
            ]
        },
        navigationState: null,
    },

    /**
     * @description call subscriber
     */
    _callSubscriber() {
        console.log('Don\'t have subscriber')
    },

    /**
     * @description save new post to state
     */
    _addPost() {
        const posts = this._state.profileState.postsData;
        const post = {
            id: Math.floor(Math.random()*1000000),
            text: this._state.profileState.currentPostText,
            likes: {
                count: 0
            },
            avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg'
        }
    
        posts.push(post);
        this._callSubscriber();
    },

    /**
     * @description save new text of the post to state
     * @param {String} text text of the message 
     */
    _changePostText(text)  {
        this._state.profileState.currentPostText = text;
        this._callSubscriber();
    },

    /**
     * @description save message to state
     */
    _addMessage() {
        const messages = this._state.dialogsState.messagesInfo;
        const text = this._state.dialogsState.currentMessageText;
        const message = {
            id:  Math.floor(Math.random()*1000000),
            idUser: '',
            messageInfo: {text},
            avatar: 'https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg',
            isMyMessage: true
        };
        
        messages.push(message);
        this._callSubscriber();
    },

    /**
     * @description save new text of the message to state
     */
    _changeMessageText(text) {
        this._state.dialogsState.currentMessageText = text;
        this._callSubscriber();
    },

    /**
     * @description get current state
     */
    get state () {
        return this._state;
    },
    
    /**
     * @description subscribe on rerender app
     */
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /**
     * @description store management
     * @param {Object} action save event and data
     */
    dispatch(action) {
        switch(action.type) {
            case ADD_POST: return this._addPost();
            case UPDATE_NEW_POST_TEXT: return this._changePostText(action.text);

            case ADD_MESSAGE: return this._addMessage();
            case UPDATE_MESSAGE_TEXT: return this._changeMessageText(action.text);

            default: return null;
        }
    },
    
    /**
     * @description initialization state
     */
    initState() {
        this._state.navigationState = {
            friendsInfo: this._state.dialogsState.usersInfo.filter(user => user.friend)
        }
    }
}

store.initState();

export default store;