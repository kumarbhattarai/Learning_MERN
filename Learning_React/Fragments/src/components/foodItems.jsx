import '../tailwind.css';
import Items from './listItem';
const FoodItems=({foodItems})=>{
    // let food=['Pizza','Burger','Ice Cream','French Fries','Soda'];
    return(
    <div className='ml-5'>

  {foodItems.map((item) => 
<Items key={item} food={item}> </Items>
  )}

    </div> 
);
}

export default FoodItems;