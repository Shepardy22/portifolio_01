import {FaPaintBrush} from 'react-icons/fa';
import {HiOutlineTrendingUp} from 'react-icons/hi';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';

export default function Servicos(){
    return (    
        <div className="h-full  w-full  bg-slate-900 " id='sentinel'>
            <div className=" flex flex-col ">

                <div className="mx-auto mt-14">
                    <h2 className="text-3xl text-gray-200 " >Serviços</h2>
                    <div  className="text-1xl text-orange-400">Que Oferecemos</div>
                </div>

                <ul className=" mx-auto flex flex-col mt-8 md:flex-row ">

                    <li className=" h-56 w-64  bg-slate-400 m-6 flex flex-col text-center hover:border-4 border-orange-400 rounded">
                        <div className='text-6xl flex mx-auto mt-6 text-gray-900'><FaPaintBrush/></div>
                        <div className='mt-8 text-lg'>
                            <p className='text-2xl mb-2'>Web Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </li>

                    <li className=" h-56 w-64  bg-slate-400 m-6 flex flex-col text-center hover:border-4 border-orange-400 rounded ">
                        <div className='text-6xl flex mx-auto mt-6 text-gray-900 '><HiOutlineTrendingUp/></div>
                        <div className='mt-8 text-lg'>
                            <p className='text-2xl mb-2'>Anúncios</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </li>

                    <li className=" h-56 w-64  bg-slate-400 m-6 flex flex-col text-center hover:border-4 border-orange-400 rounded">
                        <div className='text-6xl flex mx-auto mt-6 text-gray-900'><IoIosArrowBack/><IoIosArrowForward/></div>
                        <div className='mt-8 text-lg'>
                            <p className='text-2xl mb-2'>Design de Apps</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </li>
                    
                </ul>

            </div>
        </div>
    );
}