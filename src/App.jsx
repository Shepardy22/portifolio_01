import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";
import Servicos from "./components/Servicos";
import Especialidades from "./components/Especialidades";
import Footer from "./components/Footer";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        if(entries.some(entry => entry.isIntersecting)) {
            setVisible(true);    
        }else {
            setVisible(false);
        }  
    });
    intersectionObserver.observe(document.querySelector('#sobre')); //id sentinel em serviços
    intersectionObserver.observe(document.querySelector('#sentinel'));
   return () => intersectionObserver.disconnect();
  });

  return (
    <div className="flex flex-col  bg-slate-100 ">
      <Navbar visible={visible}/>
      <Home/>
      <Servicos/>
      <Especialidades/>
      <Footer/>
    </div>
  );
}

export default App;
