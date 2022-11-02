export default function  SkillBox(){
    return (
        //container
        <div className="relative mx-6  w-full bg-slate-200"> 
            <div className=" m-2">
                <div className="flex justify-between mr-6">
                    <span className="block">HTML</span>
                    <span className="tootip">95%</span>
                </div>
                
                <div className="h-2 w-full mt-1 bg-slate-300 ">
                    <span className="relative block h-full w-95 bg-orange-400"/> 
                </div>
            </div>

            <div className=" m-2">
                <div className="flex justify-between mr-6">
                    <span className="block">CSS</span>
                    <span className="tootip">90%</span>
                </div>
                
                <div className="h-2 w-full mt-1 bg-slate-300 ">
                    <span className="relative block h-full w-85 bg-orange-400"/> 
                </div>
            </div>

            <div className=" m-2">
                <div className="flex justify-between mr-6">
                    <span className="block">JavaScript</span>
                    <span className="tootip">82%</span>
                </div>
                
                <div className="h-2 w-full mt-1 bg-slate-300 ">
                    <span className="relative block h-full w-82 bg-orange-400"/> 
                </div>
            </div>

            <div className=" m-2">
                <div className="flex justify-between mr-6">
                    <span className="block">React</span>
                    <span className="tootip">85%</span>
                </div>
                
                <div className="h-2 w-full mt-1 bg-slate-300 ">
                    <span className="relative block h-full w-85 bg-orange-400"/> 
                </div>
            </div>

            <div className=" m-2">
                <div className="flex justify-between mr-6">
                    <span className="block">Java</span>
                    <span className="tootip">60%</span>
                </div>
                
                <div className="h-2 w-full mt-1 bg-slate-300 ">
                    <span className="relative block h-full w-60 bg-orange-400"/> 
                </div>
            </div>
        </div>
    )
}