import React from 'react';
import {presetGpnDefault, Theme} from '@consta/uikit/Theme';
import {Responses404} from '@consta/uikit/Responses404';
import {Button} from '@consta/uikit/Button';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import ServiceDetailPage from "../../pages/ServiceDetailsPage/ServiceDetailsPage";
import ServicePage from "../../pages/ServicePage/ServicePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";


const App = function () {
    return (
        <Theme preset={presetGpnDefault} style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "space-between", paddingRight: "100px", paddingLeft: "100px" }}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage/>}></Route>
                        <Route path="services" element={<ServicePage/>}></Route>
                        <Route path='services/:id' element={<ServiceDetailPage/>}></Route>
                        <Route path='login' element={<LoginPage/>}></Route>
                        <Route path='user/:id' element={<ProfilePage/>}></Route>
                    </Route>
                    <Route path='*' element={<Responses404 className='test' actions={<Button onClick={() => window.location.href = '/'} size="m" view="ghost" label="На главную" />}/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Theme>
    )
}

export default App;
