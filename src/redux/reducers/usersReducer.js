import {
    FOLLOW,
    UNFOLLOW,
    SET_USERS,
    CHANGE_CURRENT_PAGE,
    SET_PAGE_SIZE,
    SET_TOTAL_COUNT,
} from '../../constants';

const initialState = {
    users: [],
    pageSize: 1,
    total: 1,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    let _state = { ...state };

    const followingManagement = (id, toggle) => {
        const users = [..._state.users].map(user => {
            if (user.id !== id) return user;

            return { ...user, friend: toggle };
        });

        _state = { ...state, users };
    };

    const changeCurrentPage = currentPage => {
        _state = {
            ..._state,
            currentPage,
        };
    };

    const setPageSize = pageSize => {
        _state = {
            ..._state,
            pageSize,
        };
    };

    const setTotalCount = total => {
        _state = {
            ..._state,
            total,
        };
    };

    const setUsers = users => {
        _state = {
            ..._state,
            users,
        };
    };

    switch (action.type) {
        case FOLLOW:
            followingManagement(action.userId, true);
            break;

        case UNFOLLOW:
            followingManagement(action.userId, false);
            break;

        case CHANGE_CURRENT_PAGE:
            changeCurrentPage(action.currentPage);
            break;

        case SET_PAGE_SIZE:
            setPageSize(action.pageSize);
            break;

        case SET_TOTAL_COUNT:
            setTotalCount(action.total);
            break;

        case SET_USERS:
            setUsers(action.users);
            break;

        default:
            break;
    }

    return _state;
};

export const followAC = id => ({ type: FOLLOW, userId: id });
export const unfollowAC = id => ({ type: UNFOLLOW, userId: id });
export const changeCurrentPageAC = currentPage => ({
    type: CHANGE_CURRENT_PAGE,
    currentPage,
});
export const setPageSizeAC = pageSize => ({ type: SET_PAGE_SIZE, pageSize });
export const setTotalSizeAC = total => ({ type: SET_TOTAL_COUNT, total });
export const setUsersAC = users => ({
    type: SET_USERS,
    users,
});

export default usersReducer;
