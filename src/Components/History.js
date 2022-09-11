import React from "react";

const History = (props) => {

    const store = () => {
        return localStorage.getItem("Bill")
    }

    let Data = store() ? JSON.parse(store()) : 0;

    return (
        <div className={`pb-8 my-12 m-3 p-3 border ${props.permission === false ? "hidden" : " "}`}>
            <h className="text-3xl m-4">History</h>
            {Data.length > 0 ?
                <div className="mt-6">
                    <table>
                        <thead>
                            <tr className="text-center sm:font-bold font-thin">
                                <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Invoice Id</th>
                                <th className="w-2/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Party Name</th>
                                <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Date</th>
                                <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >T QTY</th>
                                <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >T Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.map((item, i) => {
                                    return (<tr key={i} className="text-center sm:font-bold font-thin">
                                        <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" >{item.id}</td>
                                        <td className="w-2/12  border  sm:font-normal font-light sm:text-lg text-sm  pl-2 text-left">{item.partyName}</td>
                                        <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{item.date}</td>
                                        <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" >{item.tqty}</td>
                                        <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{item.tamount}</td>
                                    </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                : <div>No Invoice History</div>
            }
            <h1   className={`my-6  flex text-2xl  p-2  mx-4`} onClick={(e)=>{props.onclick()}}>
                    <button className="m-auto px-6 md:px-12 py-2 bg-gray-200 hover:bg-gray-300 rounded-full">
                       Hide History
                    </button>
                </h1>
        </div>
    )
}
export default History;

