import { Contents } from './components/Contents';
import Todoitems from './components/todoItems.jsx';

import './tailwind.css';
export function App (){
    const todoItems=[{
        todoname:'coding',
        tododate:'6/04/2025'
    },
    {
        todoname:'coffee',
        tododate:'6/04/2025'
    },
    {
        todoname:'sleep',
        tododate:'6/04/2025'
    },
    {
        todoname:'Repeat',
        tododate:'6/04/2025'
    },
    {
        todoname:'Hi I am kumar Bhattarari from Bhaktapur Kathmandu. I am interested in learning and exploring new things and places',
        tododate:'6/04/2025'
    },]
    return(
        <div className="flex flex-col justify-center items-center h-screen  bg-gray-200" >
            <div className='flex flex-col justify-center items-center'>
            <h1 className="text-3xl underline mb-2" >Todo App</h1>
            </div>
            <div className = "bg-white drop-shadow-[35px_35px_35px_rgba(170,80,90,0.5)] h-[40rem]  rounded-md">
            <Contents></Contents>
        <Todoitems todoItems={todoItems}></Todoitems>
        </div>
         </div>
    )
}
