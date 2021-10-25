
import Cookies from 'universal-cookie';
import { verify, decode } from 'jsonwebtoken'
const TOKEN_KEY = 'jwt';
const cookies = new Cookies();
const secret = process.env.REACT_APP_JWT_SECRET;
export const seprator = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}



export const setToken = (token) => {
    const cookies = new Cookies();
    cookies.set(TOKEN_KEY, token, { path: '/' });

}


export const decodeToken = () => {
    let token = cookies.get(TOKEN_KEY);
    if (token && verifyToken) {
        let decodeed = decode(cookies.get(TOKEN_KEY))
        return decodeed.rows;
    } else {
        return null;
    }

}


export const verifyToken = () => {
    const cookies = new Cookies();
    let token = cookies.get(TOKEN_KEY);
    let secret = process.env.REACT_APP_JWT_SECRET;
    return (verify(token, secret, function (err, decoded) {
        if (err) {
            return false;
        } else {
            let roles = decoded.rows.ROLE;
            if (roles.includes("cam-control")) {
                return true;
            } else {
                return false;
            }

        }
    }));

}


export const logout = () => {
    const cookies = new Cookies();
    cookies.remove(TOKEN_KEY, { path: '/' })

}





export const getToken = () => {
    return cookies.get(TOKEN_KEY);
}






export const getUserName = () => {
    const cookies = new Cookies();
    let token = cookies.get(TOKEN_KEY);
    if (token) {
        let decodeed = decode(cookies.get(TOKEN_KEY))
        //  console.log(decodeed)
        return decodeed.rows.NAME;
    } else {
        return null;
    }

}

export const hasAccess = (token) => {

    if (token) {
        let roles = decode(token).rows.ROLE
        if (roles.includes("cam-control")) {
            return true;
        } else {

            return false;
        }
    } else {
        return false;
    }
}











export const getUserId = () => {
    let token = cookies.get(TOKEN_KEY);

    return (verify(token, secret, function (err, decoded) {
        if (err) {
            return false;
        } else {
            return decoded.rows.ID;
        }
    }));

}

export const isEmpty = (val) => {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}


export const reformatdata = function (data) {
    return data.map(function (item) {
        var newObj = item;
        newObj["status"] = item.status.length > 7 ? item.status.substring(0, 7) + '...' : item.status;
        //newObj["company_name"] = item.company_name.length > 12 ? item.company_name.substring(0, 12) + '...' : item.status;
        return newObj;
    });
};