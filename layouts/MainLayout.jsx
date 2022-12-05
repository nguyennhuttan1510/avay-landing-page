import React, { useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({children}) => {
  const [ openModalInfo, setOpenModalInfo ] = useState(false)
  return (
    <div>
      <Header setOpenModalInfo={setOpenModalInfo}/>
        {children}
      <Footer openModalInfo={openModalInfo} setOpenModalInfo={setOpenModalInfo}/>
    </div>
  );
};

export default MainLayout;