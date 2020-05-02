import { FOLLOW, UNFOLLOW, SET_USERS, CHANGE_CURRENT_PAGE, SET_PAGE_SIZE, SET_TOTAL_COUNT, FETCHING_USERS } from '../../constants';

const initialState = {
    users: [],
    pageSize: 1,
    total: 1,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    const followingManagement = (id, toggle) => {
        const users = [...state.users].map(user => {
            if (user.id !== id) return user;

            return { ...user, friend: toggle };
        });

        return { ...state, users };
    };

    const changeCurrentPage = currentPage => ({
        ...state,
        currentPage,
    });

    const setPageSize = pageSize => ({
        ...state,
        pageSize,
    });

    const setTotalCount = total => ({
        ...state,
        total,
    });

    const setUsers = users => ({
        ...state,
        users,
    });

    const changeFetching = toggle => ({
        ...state,
        isFetching: toggle,
    });

    switch (action.type) {
        case FOLLOW:
            return followingManagement(action.userId, true);

        case UNFOLLOW:
            return followingManagement(action.userId, false);

        case CHANGE_CURRENT_PAGE:
            return changeCurrentPage(action.currentPage);

        case SET_PAGE_SIZE:
            return setPageSize(action.pageSize);

        case SET_TOTAL_COUNT:
            return setTotalCount(action.total);

        case SET_USERS:
            return setUsers(action.users);

        case FETCHING_USERS:
            return changeFetching(action.toggle);

        default:
            return state;
    }
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
export const changeFetchingAC = toggle => ({
    type: FETCHING_USERS,
    toggle,
});

export default usersReducer;
