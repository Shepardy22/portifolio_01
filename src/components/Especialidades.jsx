import SkillBox from "./SkillBox";


export default function Especialidades(){
    return (
        <div className="w-full h-full flex flex-col mx-auto m-4" id="especialidade">
            <div className="flex flex-col mx-auto text-center my-6">
                <h2 className="text-3xl font-ubuntu">Especialidades</h2>
                <div className="flex items-center">
                    <span className="h-0.5 px-4 bg-orange-400 mr-1"/>
                        <h3 className="text-2xl font-ubuntu mx-auto">Que faço</h3>
                    <span className="h-0.5 px-4 bg-orange-400 ml-1"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4">
                <div className="flex flex-col  mx-6 md:w-1/2">
                    <h2 className="m-2 font-ubuntu text-lg">Minhas habilidades criativas e experiencias</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus veniam, at ad fugit praesentium beatae eaque voluptas nam modi quas neque recusandae totam, repellat velit ut explicabo enim corrupti esse.</p>
                    <button className="py-2 w-44 rounded mt-2 hover:font-bold bg-orange-400">Mais informações</button>
                </div>
                
                <SkillBox/>
            </div>

        </div>
    )
}