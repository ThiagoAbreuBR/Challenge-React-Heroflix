import React from 'react';
import Header from 'componentes/Header';
import Footer from 'componentes/Footer';
import styles from "./DefaultPage.module.css"
import { Outlet } from 'react-router-dom';
import { EditorasProvider } from 'componentes/Context/ContextColors';

const DefaultPage = () => {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <EditorasProvider>
                    <Outlet />
                </EditorasProvider>
            </main>
            <Footer />
        </>
    );
};

export default DefaultPage;