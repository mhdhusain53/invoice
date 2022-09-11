import React, { useState, useEffect } from "react";

const Create = (props) => {
    
    const Store = () => {
        return localStorage.getItem('Bill')
    }


    useEffect(() => {
        !Store() && localStorage.setItem('Bill', [])
    }, [])

    let invoiceId = Store() ? JSON.parse(Store()) : [];
    console.log(invoiceId?.length+1);

    const [data, setData] = useState({ id: invoiceId?.length + 1, partyName: "", number: "", date: new Date("yyyy-MM-dd"), name: "", price: 0, qty: 0, data: [] })
    const [total,setTotal]  = useState({qty:0,amount:0})

    const tableData = data.data.map((item, index) => {
        return (
            <tr className="text-center sm:font-bold font-thin">
                <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" >{index + 1}</td>
                <td className="w-4/12 sm:w-7/12 border  sm:font-normal font-light sm:text-lg text-sm  pl-2 text-left">{item.name}</td>
                <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{item.qty}</td>
                <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" >{item.price}</td>
                <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{item.price * item.qty}</td>
            </tr>
        )
    })


 


    const onSubmitAdd = () => {
        let kar = { ...data }
        let par = kar.data;
        par.push({
            name: data.name,
            qty: data.qty,
            price: data.price
        })
        setData({ ...data, data: par });
        console.log(typeof(parseFloat(total.qty)));
        setTotal({qty:parseFloat(total.qty)+parseFloat(data.qty),amount:total.amount+(data.price*data.qty)})
        console.log(total);
        console.log(data);
        setData({ ...data, name: "", price: 0, qty: 0 })
        
    }

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    const onSubmitGenerate = (e) => {
        var ddata = { id: invoiceId.length+1, partyName: data.partyName, number: data.number, date: data.date,  data:data.data,tqty:total.qty, tamount:(1.18*total.amount) }
        if (!Store()) {
            localStorage.setItem('Bill', `[${JSON.stringify(ddata)}]`)
            setData({ id: invoiceId?.length + 1, partyName: "", number: "", date: new Date(), name: "", price: 0, qty: 0, data: [] })

        }
        else {
            let Data = Store();
            Data = JSON.parse(Data);
            Data.push(ddata);
            let jak = JSON.stringify(Data)
            localStorage.setItem("Bill", jak);
            console.log(Data, "Data");
            // setData(ddata)

        }

        setData({ id: invoiceId?.length + 1, partyName: "", number: "", date: new Date(), name: "", price: 0, qty: 0, data: [] })
console.log(data)
        setTotal({qty:0,amount:0})

        // localStorage.setItem();
        props.onclick();
    }

    return (
        <div className={`${props.permission === false ? "hidden" : " "} border p-2 m-3 pb-4 mb-6`}>
            <div className="border text-left p-4 m-3">
                <div>
                    <p className="inline pl-3">Invoice Id : </p><p className=" inline bold" value={invoiceId?.length + 1}>{invoiceId?.length + 1}</p>
                </div>

                <div className="mt-3">
                    <label className="pl-2 ">Party Name : </label>
                    <input type="text" value={data.partyName} name="partyName" onChange={handleOnChange} className="sm:ml-8 ml-2 border-2 block sm:inline-block  md:w-56 h-8"></input>
                </div>

                <div className="mt-3">
                    <label className="pl-2 ">Mobile Number : </label>
                    <input type="text" value={data.number} name="number" onChange={handleOnChange} className="sm:ml-1 ml-2 border-2 block sm:inline-block  md:w-56 h-8"></input>
                </div>

                <div className="mt-3">
                    <p className="inline pl-2 ">Date : </p>
                    <input type="date" value={data.date} name="date" onChange={handleOnChange} className="sm:ml-20 ml-2 border-2 block sm:inline-block  md:w-56 h-8"></input>
                </div>

                <table className="table-auto border w-full mt-6">
                    <thead>
                        <tr className="text-center sm:font-bold font-thin">
                            <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Sr</th>
                            <th className="w-4/12 sm:w-7/12 border sm:font-semibold font-medium sm:text-lg text-sm  pl-2 text-left">Perticulars</th>
                            <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >QTY</th>
                            <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Price/Unit</th>
                            <th className="w-1/12 border sm:font-semibold font-medium sm:text-lg text-sm" >Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData}
                        <tr className="text-center sm:font-bold font-thin">
                            <td colSpan="5" className="w-1/12 border sm:font-bold font-semibold sm:text-lg text-sm" >-</td>
                        </tr>
                        <tr className="text-center sm:font-bold font-thin">
                            <td className="w-1/12 border sm:font-bold font-semibold sm:text-lg text-sm" >Total</td>
                            <td className="w-4/12 sm:w-7/12 border  sm:font-bold font-semibold sm:text-lg text-sm pl-2 text-left"></td>
                            <td className="w-1/12 border  sm:font-bold font-semibold sm:text-lg text-sm" >{total.qty}</td>
                            <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" ></td>
                            <td className="w-1/12 border  sm:font-bold font-semibold sm:text-lg text-sm" >{total.amount}</td>
                        </tr>
                        <tr className="text-center sm:font-bold font-thin">
                            <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" ></td>
                            <td className="w-4/12 sm:w-7/12 border  sm:font-normal font-light sm:text-lg text-sm pl-2 text-left"></td>
                            <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" >SGST</td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >9%</td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{(total.amount*0.09).toFixed(2)}</td>
                        </tr>
                        <tr className="text-center sm:font-bold font-thin">
                            <td className="w-1/12 border sm:font-normal font-light sm:text-lg text-sm" ></td>
                            <td className="w-4/12 sm:w-7/12 border  sm:font-normal font-light sm:text-lg text-sm pl-2 text-left"></td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >CGST</td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >9%</td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" >{(total.amount*0.09).toFixed(2)}</td>

                        </tr>
                        <tr className="text-center sm:font-bold font-thin">
                            <td className="w-1/12 border sm:font-bold font-semibold sm:text-lg text-sm" >Net Amount</td>
                            <td className="w-4/12 sm:w-7/12 border  sm:font-normal font-light sm:text-lg text-sm pl-2 text-left"></td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" ></td>
                            <td className="w-1/12 border  sm:font-normal font-light sm:text-lg text-sm" ></td>
                            <td className="w-1/12 border  sm:font-bold font-semibold sm:text-lg text-sm" >{(total.amount*1.18).toFixed(2)}</td>
                        </tr>
                    </tbody>


                </table>
            </div>

            <div className=" align-center items-center ">
                <div className="border my-4 sm:w-1/3 m-auto w-4/5 sm:inline-block">
                    <h1 className="text-xl bg-gray-100 p-2">Add Product</h1>

                    <div className="m-2 mt-4">
                        <label className="">Name: </label>
                        <input type="text" value={data.name} className="ml-5 border-2 w-1/2" name="name" onChange={handleOnChange}></input>
                    </div>

                    <div className="m-2">
                        <label className="">Quntity: </label>
                        <input type="number" value={data.qty} className="ml-2 border-2 w-1/2" name="qty" onChange={handleOnChange}></input>
                    </div>

                    <div className="m-2">
                        <label className=" text-center">Price: </label>
                        <input type="number" value={data.price} className="ml-6 border-2 w-1/2" name="price" onChange={handleOnChange}></input>
                    </div>

                    <button className="text-xl px-3 md:px-6 p-1 my-4 bg-gray-200 hover:bg-gray-300 rounded-full mx-2 " onClick={(e) => onSubmitAdd()}>Add</button>

                </div>
                <div className="sm:w-1/6  sm:inline-block ">
                    <button className="p-3 text-xl px-4 bg-gray-200 hover:bg-gray-300 rounded-full" onClick={(e) => onSubmitGenerate()}>Generate Invoice</button>
                </div>
            </div>
        </div>
    )
}

export default Create;


