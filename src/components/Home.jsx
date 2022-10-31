import { useEffect, useState } from 'react';
import man from '../img/man.jpg';

  

export default function Home() {

    

    


    return (
        <>
        <section className=" flex bg-[url('./img/bg.jpg')] bg-cover  h-screen  font-ubuntu" >
            <div className="m-auto mx-10 my-auto ">
                <div>
                    <div className="text-3xl text-indigo-300">Olá, meu nome é</div>
                    <div className="text-4xl text-indigo-300 font-medium -ml-3">Yuri Nunes</div>
                    <div className="text-2xl my-1 mx-o text-indigo-300">eu sou <span className="text-3xl text-orange-400 ">Front-end Developer</span> </div>
                    <a className="flex w-28 justify-center font-medium mt-2 px-2 py-2  bg-orange-400 rounded text-gray-900  hover:font-semibold" href="/">Contatar-me</a>
                </div>
            </div>
            
        </section>
        <br />
        <div id='sentinel'  >
            <img  src={man} alt="" />
        </div>
        
        </>
    );
}