import React from 'react';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <div className='background'>
                <AppBar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default MainLayout;