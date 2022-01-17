import React from 'react';
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Pizza</title>
        <meta name='description' content='Лучшая пицца в городе'/>
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;