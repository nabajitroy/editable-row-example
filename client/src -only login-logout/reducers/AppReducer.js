import { setToken, decodeToken } from '../components/common/utilities'

const initialState = {
    user: {},
};

function AppReducer(state = initialState, action) {

    switch (action.type) {


        case 'SET_LOGIN_SUCCESS':

            setToken(action.payload.data.token)
            const token = decodeToken();
            token.isLoggedIn = true;
            return { ...state, user: token }

        case 'GET_LOGIN_INFO':
            const decode = decodeToken();

            if (decode) {
                decode.isLoggedIn = true;
            }

            return { ...state, user: decode }

        default:
            return state;
    }
};
export default AppReducer;













