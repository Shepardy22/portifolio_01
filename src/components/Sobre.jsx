import man from '../img/man.jpg';

export default function Sobre() {
    return (
        
        
        <section className=' mx-auto bg-gray-100 mb-4 ' id='sobre'>
        
            <div className='flex justify-center mx-4 '>
            
                <div className=" flex flex-col md:flex-row ">
                
                    <div className='md:mr-20  '>
                        <div className='flex flex-col mx-auto '>
                        <h2 className=' mx-auto md:hidden font-ubuntu text-3xl text-gray-900' >Sobre</h2>
                            <div className='mx-auto'>
                                <h2 className='p-2'><span>____</span> Eu sou Jhon Smith<span>____</span></h2>
                            </div>
                        </div>

                        <div className='w-56 mx-auto md:w-72 '><img  src={man} alt="" id='sobre'/></div>
                    </div>

                    <div className='w-auto md:w-auto mx-auto m-2  
                        md:my-auto 
                        flex flex-col 
                        justify-center 
                        h-full'>

                        <div className='flex-col mx-auto '>
                            <h2 className=' flex justify-center invisible md:visible font-ubuntu text-3xl text-gray-900 '>Sobre</h2>
                            <div className='h-0.5 w-48 flex mb-2 bg-orange-400 invisible md:visible'></div>
                        </div>
                        <div className='mx-4 p-8  md:border rounded bg-gray-200 '>
                            
                                <p >Me chamo Jhon Smith,</p>
                                <p>e sou <span>Desenvolvedor Front-end</span></p>
                            
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, numquam. Alias amet dolorem fugiat quaerat debitis earum at repellat non velit distinctio, exercitationem aperiam, maxime nostrum! Sit ex rem earum!
                        </div>
                        <button className='ml-8 mt-2 text-gray-900 py-2 w-32 rounded  bg-orange-400 hover:font-bold'>Baixar CV</button>
                    </div>

                    

                    
                </div>

                

                
                
            </div>
            
        </section>
        
    );
}