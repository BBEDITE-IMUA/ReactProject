import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Button } from '@consta/uikit/Button';
import '../../pages/ProfilePage/ProfilePage'
import { User } from '@consta/uikit/User';

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const currentUserID = user?.id;
    const userName = user?.firstName + ' ' + user?.lastName;


    const handleLogOut = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <>
        {!currentUserID ? 
            <header className="header">
                <div className="header__nav-left">
                    <NavLink style={{marginBottom: "1rem"}} to="/" className="header__nav-button" activeclassname="active">
                        <Button size='m' label="Главная" view="ghost" form="default" />
                    </NavLink>
                </div>
                <div className="header__nav-right">
                    <NavLink to="/login" className="header__nav-button" activeclassname="active">
                        <Button size='m' label="Войти" view="ghost" form="default" />
                    </NavLink>
                </div>
            </header>
        : <header className="header">
            <div className="header__nav-buttons">
                <NavLink style={{marginBottom: "1rem"}} to="/" className="header__nav-button" activeclassname="active">
                    <Button size='m' label="Главная" view="ghost" form="default" />
                </NavLink>
                <NavLink to="/services" className="header__nav-button" activeclassname="active">
                    <Button size='m' label="Услуги" view="ghost" form="default" />
                </NavLink>
            </div>
            <div className="header__nav-buttons">
                <NavLink to={`/user/${currentUserID}`} className="header__nav-button" activeclassname="active">
                    <User name={userName} avatarUrl={user.image}/>
                </NavLink>
                <div onClick={handleLogOut} className="header__nav-button" activeclassname="active">
                    <Button size='m' label="Выход" view="ghost" form="default" />
                </div>
            </div>
          </header>   
        }
        </>
    );
};

export default Header;
