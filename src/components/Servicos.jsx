export default function Servicos(){
    return (    
        <div className="h-full  w-full  bg-slate-900 ">
            <div className=" flex flex-col ">

                <div className="mx-auto mt-14">
                    <h2 className="text-3xl text-gray-200 ">Serviços</h2>
                    <div  className="text-1xl text-orange-400">Que Oferecemos</div>
                </div>

                <ul className=" mx-auto flex flex-col mt-8 md:flex-row ">
                    <li className=" h-40 w-48  bg-slate-400 m-6">A</li>
                    <li className=" h-40 w-48  bg-slate-400 m-6">B</li>
                    <li className=" h-40 w-48  bg-slate-400 m-6">C</li>
                </ul>

            </div>
        </div>
    );
}