import React, { useState } from "react";
import History from "./History";
import Create from "./Create";

const App =()=>{
    
    const [toggle,setToggle]=useState({'create':false,'history':false});

    const onClickCreate=()=>{
        setToggle({'create':false,'history':toggle['history']})
    }

    const onClickHistory=()=>{
        setToggle({'create':(toggle['create']),'history':false})
    }

    return (
        <div className="pb-6">
            <div>
                <h1 className="text-center text-4xl p-4 bg-gray-200 mb-8">
                    Invoice Generator
                </h1>
            </div>
            <div className="text-center ">
                <h1  onClick={()=>{setToggle({'create':!(toggle['create']),'history':toggle['history']})}} className={`inline text-2xl px-6 md:px-12 p-2 my-6 bg-gray-200 hover:bg-gray-300 rounded-full mx-4 ${toggle['create']===false?'':'hidden'} `}>
                    <button className="">
                        Create
                    </button>
                </h1>
                <Create permission={toggle['create']} onclick={onClickCreate} />

                <h1  onClick={()=>{setToggle({'create':(toggle['create']),'history':!(toggle['history'])})}} className={`inline text-2xl px-6 md:px-12 p-2 my-6 bg-gray-200 hover:bg-gray-300 rounded-full mx-4 ${toggle['history']===false?'':'hidden'} `}>
                    <button className="">
                        History
                    </button>
                </h1>
                <History permission={toggle['history']} onclick={onClickHistory}/>
            </div>
            
        </div>
    )
}

export default App;