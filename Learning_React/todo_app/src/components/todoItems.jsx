  import Task from './tasks.jsx';
export default function Todoitems({todoItems}){
    return (
        <>
        {
            todoItems.map((items)=><Task key={items} todoname={items.todoname} tododate={items.tododate}></Task>)
        }
        </>
    )
}