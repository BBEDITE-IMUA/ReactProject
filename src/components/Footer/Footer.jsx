import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

const Footer = () => {
    const currentUserID = localStorage.getItem('id');

    return (
        <>
        {!currentUserID ?
            <footer className="footer">
                <div className="footer__left">
                    <NavLink to="/" className="footer__nav-button" activeclassname="active">
                        <Button size="m" label="Главная" view="ghost" form="default" />
                    </NavLink>
                </div>
                <div className="footer__right">
                    <Text size='m' lineHeight="m" view="primary" className="footer__title">
                        © Моя Компания
                    </Text>
                </div>
            </footer>
          : <footer className="footer">
            <div className="footer__left">
                <NavLink to="/" className="footer__nav-button" activeclassname="active">
                    <Button size="m" label="Главная" view="ghost" form="default" />
                </NavLink>
                <NavLink to="/services" className="footer__nav-button" activeclassname="active">
                    <Button size="m" label="Услуги" view="ghost" form="default" />
                </NavLink>
            </div>
            <div className="footer__right">
                <Text size='m' lineHeight="m" view="primary" className="footer__title">
                    © Моя Компания
                </Text>
            </div>
        </footer>
        }
        </> 
    );
};

export default Footer;
