import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navigationReducer from "./reducers/navigationReducer";

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
        this._state.profileState = profileReducer(this._state.profileState, action);
        this._state.dialogsState = dialogsReducer(this._state.dialogsState, action);
        this._state.navigationState = navigationReducer(this._state.navigationState, action);

        this._callSubscriber();
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