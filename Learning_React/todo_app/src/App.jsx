import { Contents } from './components/Contents';
import Task from './components/tasks.jsx';
import './tailwind.css';
export function App (){
    return(
        <div className="flex flex-col justify-center items-center h-screen  bg-gray-200" >
            <div className='flex flex-col justify-center items-center'>
            <h1 className="text-3xl underline mb-2" >Todo App</h1>
            </div>
            <div className = "bg-white drop-shadow-[35px_35px_35px_rgba(170,80,90,0.5)] h-[40rem]  rounded-md">
            <Contents></Contents>
            <Task todoname='coding' tododate='6/04/2025'></Task>
            <Task todoname='coffee' tododate='6/04/2025'></Task>
            <Task todoname='sleep' tododate='6/04/2025'></Task>
            <Task todoname='Repeat' tododate='6/04/2025'></Task>
            <Task todoname='fensfkfbfbkehhgdksfnkhfkedhkgskdghsgshgsdghskd' tododate='6/04/2025'></Task>
            



        </div>
         </div>
    )
}
