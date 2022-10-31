import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";

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
    intersectionObserver.observe(document.querySelector('#sentinel'));
   return () => intersectionObserver.disconnect();
  });

  return (
    <>
    <Navbar visible={visible}/>
    <Home/>
    </>
  );
}

export default App;
