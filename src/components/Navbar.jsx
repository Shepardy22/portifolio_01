import {FiMenu} from 'react-icons/fi';


export default function Navbar() {
    return (
        //Barra de Navegação
        <nav className="fixed top-0 w-full bg-gray-900 text-indigo-100 font-ubuntu h-12" >
            {/* Logo */}
            <div className="container m-auto flex justify-between items-center">

                <div className='mt-1 ml-8 sm:mx-2'><a href="/" className="text-indigo-100 text-3xl  ">
                            Port
                        <span className="text-orange-400 transition-all duration-300 ease-in">
                            folio.
                        </span></a>
                </div>

                {/* Menu */}
                <ul className="hidden sm:flex text-xs font-medium ml-6 transition-colors duration-500  mt-1">
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Inicio</a></li>
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Sobre</a></li>
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Serviços</a></li>
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Especialidade</a></li>
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Equipe</a></li>
                    <li><a className="hover:text-orange-400 transition-all duration-300 inline-block p-2 text-base " href="/">Contato</a></li>
                </ul>
                
                {/* Menu Mobile */}
                <button className="sm:hidden pr-8 mt-2  focus:outline-none hover:text-orange-400     
                group ">
                    <FiMenu className="text-3xl text-indigo-100 focus:outline-none hover:text-orange-400 "/>

                    <div className='absolute h-screen -right-full  w-8/12 bg-gray-200 top-0   
                    opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                        <ul className='text-gray-900 flex flex-col items-center w-full text-lg pt-10 transition-all duration-300'>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full ">Inicio</li>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full">Sobre</li>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full">Serviços</li>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full">Especialidade</li>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full">Equipe</li>
                            <li className=" hover:bg-orange-200  transition-all duration-300 py-2 w-full">Contato</li>
                        </ul>
                    </div>
                </button>
                
            </div>
        </nav>
    );
}