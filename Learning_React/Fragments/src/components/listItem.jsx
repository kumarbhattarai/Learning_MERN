import '../tailwind.css';
import styles from './listItem.module.css';
const Items=({food})=>{
    // let {food}=props;
    const handleFood=(event,food)=>{
        alert(`you want to buy ${food}.`);
        alert(`Event type is ${event.type}`);
    }
    return ( 
         <>
          <li className={`${styles["items"]} mt-2 flex justify-between items-center`}>{food} 
            <button className='ml-2 border-2 rounded-lg p-1' onClick={(event)=>handleFood(event,food)}>Buy</button>
        {/* Inline arrow functions must be avoided */}
          </li>
         </>
        );
}
export default Items;