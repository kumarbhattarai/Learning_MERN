export default function Task( {todoname,tododate}){
    return (
        <>
                    <div className='flex justify-between border-b-1 border-gray-300 p-2'>
                    <form action="" className="ml-10 flex justify-between w-full mr-15" >
                        <input className='mr-5' type="checkbox" />
                        <ul id="List" className="w-full flex flex-wrap justify-between flex-row">
    <li className="w-40 break-words mr-2 sm:mr-0"> {todoname}</li>
    <li className="sm:mr-0 flex items-center flex-shrink-0 ">{tododate}</li>
    <li className='ml-2 sm:ml-0 pl-2 pr-2 pb-1 rounded-3xl hover:bg-slate-300 cursor-pointer flex items-center'>&times;</li>
</ul>
                    </form>
            </div>

        </>
    )
}