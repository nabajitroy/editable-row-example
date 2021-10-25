

import Communication from './Communication';
import { decodeToken } from '../components/common/utilities';
const AppService = {




    login(dispatch, values) {

        return new Promise((resolve, reject) => {
            try {
                Communication.login(values).then(loginInfo => {

                    if (loginInfo.data.status === 'success' && loginInfo.data.token) {
                        dispatch({ type: 'SET_LOGIN_SUCCESS', payload: loginInfo })
                        resolve(loginInfo)
                    } else {
                        resolve(loginInfo)
                    }


                })
            } catch (err) {
                console.log(err)
                // reject(err)
            }
        })

    },




}
export default AppService;