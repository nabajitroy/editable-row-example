import { setToken, decodeToken, reformatdata } from '../components/common/utilities'
import { columns } from '../components/ProcureToPayProcess/columns';

const initialState = {
    user: {},
    columns: columns,
    procureList: []
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

        case 'SET_PROCURE_LIST':
            return { ...state, procureList: action.payload }

        case 'UPDATE_PROCURE_LIST':
            //  return { ...state, procureList: action.payload }

            const newData = [...state.procureList];
            let index = newData.findIndex(item => item.id === action.payload.id);
            let item = newData[index];
            // if(action.payload.field)
            item[action.payload.field] = action.payload.value

            newData.splice(index, 1, { ...item, ...action.payload });

            return {
                ...state,
                procureList: reformatdata(newData),

            }

        case 'ADD_NEW_PROCURE_DATA':

            return {
                ...state,
                procureList: [action.payload, ...state.procureList]
            }

        case 'DELETE_PROCURE_DATA':
            const deletableList = [...state.procureList];
            let deletedIndex = deletableList.findIndex(item => item.id == action.payload);
            deletableList.splice(deletedIndex, 1);
            return { ...state, procureList: deletableList }


        case 'SET_COLUMN_WIDTH':

            let dataIndex = action.payload.dataIndex;
            const newColmuns = [...state.columns];
            console.log(newColmuns.title)
            // console.log(newColmuns)
            /*let findIndex = newColmuns.children.findIndex(item => {
                console.log(action.payload.dataIndex)
                item.dataIndex == action.payload.dataIndex
            });
            console.log(findIndex)*/
            /* if (findIndex >= 0) {
                 newColmuns[findIndex].width = action.payload.size.width;
             } else {
                 newColmuns.map(column => {
                     if (column.children) {
                         let findIndex = column.children.findIndex(item => item.dataIndex === action.payload.dataIndex);
                         if (findIndex >= 0) {
                             column.children[findIndex].width = action.payload.size.width;
                         }
                     }
                 })
             }*/
            return {
                ...state,
                columns: state.columns
            }




        default:
            return state;
    }
};
export default AppReducer;













