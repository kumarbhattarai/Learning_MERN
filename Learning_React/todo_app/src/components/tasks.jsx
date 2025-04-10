export default function Task( {todoname,tododate}){
    return (
        <>
                    <div className='flex justify-between'>
                    <form action="" className="ml-10 flex justify-between w-full mr-15" >
                        <input className='mr-5' type="radio" />
                    <ul id="List" className=" w-full flex justify-between flex-row " >
                        <li className="w-[40%] truncate"> {todoname}</li>
                        <li className=" sm:mr-0">{tododate}</li>
                        <li className=' ml-2 sm:ml-0 pl-2 pr-2 pb-1 rounded-3xl hover:bg-slate-300 cursor-pointer'>&times;</li>
                    </ul>
                    </form>
            </div>

        </>
    )
}