import '../tailwind.css';
import styles from './listItem.module.css';
const Items=({food})=>{
    // let {food}=props;
    return ( 
         <>
          <li className={`${styles["items"]} underline`}>{food}</li>
         </>
        );
}
export default Items;