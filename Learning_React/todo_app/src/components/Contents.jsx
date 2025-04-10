import '../tailwind.css';
export function Contents(){
    return (
        <div>
            <div className="flex p-5 justify-center mx-5 mt-5">
                <form action="" className="flex justify-center  flex-col sm:flex-row ">
                    <label htmlFor="task" className=""></label>
                    <input type="text" id='task' placeholder='Enter your task here' name='task' className=" p-2 border border-gray-300 rounded-md"/>
                    <label for="Date"></label>
                    <input type="date" id="Date" name='Date' className='p-1 border border-gray-300 rounded-md ml-6 mr-6'/>
                    <button className='bg-radial-[at_50%_75%] from-purple-500 to-violet-900 to-90% text-white p-2 mr-2 rounded-md'>Add Task</button>
                </form>
            </div>
        </div>
    )
}