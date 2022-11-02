import Sobre from './Sobre';
import { Typewriter } from 'react-simple-typewriter'
  

export default function Home() {

    

    return (
        <>
        <section className=" flex bg-[url('./img/bg.jpg')] bg-cover  h-screen  font-ubuntu" id='inicio'>
            <div className="m-auto mx-10 my-auto ">
                <div className='ml-8'>

                    <span className='element'></span>

                    <div className="text-3xl text-indigo-300">Olá, meu nome é:</div>
                    <div className="text-4xl text-indigo-300 font-medium -ml-3">Yuri Nunes</div>
                    <div className="text-2xl my-1 mx-o text-indigo-300">eu sou 
                    <span className="text-3xl text-orange-400 ml-2">
                        <Typewriter
                            words={['Front-end Developer.', 'Programador.', 'Estudante.']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> 
                </div>
                    <a className="flex w-28 
                    mt-2 px-2 py-2 
                    justify-center 
                    font-medium  
                    bg-orange-400  
                    text-gray-900  
                    hover:font-semibold rounded" href="/">Contatar-me</a>
                </div>
            </div>
            
        </section>
        <br />
        <div  >
            <Sobre/>
        </div>
        
        </>
    );
}