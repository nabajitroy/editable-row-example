import React, { useEffect } from 'react';
import logo from '../../../src/logo.png';
import { LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { useHistory } from "react-router-dom"
import { logout } from './utilities'


function HeaderComponent() {
    const { user } = useSelector((state) => state.AppReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_LOGIN_INFO' })
    }, [dispatch])

    const handleClick = () => {

        history.push("/login");
        logout();
    }
    return (
        <header>
            <div className="row ">
                <a className="navbar-brand" href="/"  >
                    <img src={logo} alt="Rotzler" />
                </a>
                <div className="col header-col">
                    {user && user.isLoggedIn ?
                        <span>
                            <ul className="nav profile"  >
                                <li className="nav-item welcome">
                                    <Avatar size="20" round={true} name={user.NAME} /> {user.NAME}
                                </li>
                                <li className="nav-item">
                                    <a href="/profile"><UserAddOutlined style={{ color: '#1890ff' }} />   </a>
                                </li>
                                <li className="nav-item">
                                    <LogoutOutlined rel="noopener noreferrer" style={{ color: '#1890ff' }} onClick={() => handleClick()} />
                                </li>
                            </ul>
                        </span>
                        : ''
                    }
                </div>
            </div>
        </header >

    );
}

export default HeaderComponent;
