import React from 'react';
import './Layout.scss';
import Header from "../../components/header/Header";

const Layout = ({children}) => (
    <div className={'main-container'}>
        <Header/>
        <div className={'row'}>
            {children}
        </div>
    </div>
);

export default Layout;