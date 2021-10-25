

import Communication from './Communication';
import { reformatdata } from '../components/common/utilities';
import moment from 'moment';
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
                reject(err)
            }
        })

    },

    list(dispatch) {
        return new Promise((resolve, reject) => {
            try {
                Communication.list().then(info => {

                    dispatch({ type: 'SET_PROCURE_LIST', payload: reformatdata(info.data.rows) })
                    resolve(info)
                })
            } catch (err) {
                reject(err)
            }
        })
    },

    update(dispatch, values) {
        return new Promise((resolve, reject) => {
            try {
                Communication.update(values).then(info => {
                    dispatch({ type: 'UPDATE_PROCURE_LIST', payload: info.data.rows })
                    resolve(info)
                })
            } catch (err) {
                reject(err)
            }
        })
    },

    add(dispatch) {

        // console.log(moment().format('YYYY-MM-DD'))
        const row = {
            receipt_date: moment().format('YYYY-MM-DD'),
            invoice_no: "-",
            invoice_date: "00-00-0000",
            company_name: "",
            ifs_inward_date: "00-00-0000",
            placed_to_qc_date: "00-00-0000",
            received_from_qc_date: "00-00-0000",
            status: "",
            given_to_purchase_date: "00-00-0000",
            received_from_purchase_date: "00-00-0000",
            received_by_a_cs: "-"
        }

        return new Promise((resolve, reject) => {
            try {
                Communication.create(row).then(info => {
                    dispatch({ type: 'ADD_NEW_PROCURE_DATA', payload: info.data.rows })
                    resolve(info)
                })
            } catch (err) {
                reject(err)
            }
        })
    },

    delete(dispatch, record) {
        // console.log(record)
        return new Promise((resolve, reject) => {
            try {
                Communication.delete(record.id).then(info => {
                    console.log(info)
                    dispatch({ type: 'DELETE_PROCURE_DATA', payload: info.data.rows })
                    resolve(info)
                })
            } catch (err) {
                reject(err)
            }
        })
    },


    setColumnWidth(dispatch, dataIndex, size) {
        dispatch({ type: 'SET_COLUMN_WIDTH', payload: { dataIndex, size } })

    }

}
export default AppService;


