import '../tailwind.css';
import styles from './listItem.module.css';
const Items=({food,handleBuy})=>{
    // let {food}=props;
    return ( 
         <>
          <li className={`${styles["items"]} mt-2 flex justify-between items-center`}>{food} 
            <button className='ml-2 border-2 rounded-lg p-1' onClick={handleBuy}>Buy</button>
        {/* Inline arrow functions must be avoided */}
          </li>
         </>
        );
}
export default Items;