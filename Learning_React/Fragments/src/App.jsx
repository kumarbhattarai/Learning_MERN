import './tailwind.css'
import FoodItems from './components/foodItems'
import Error from './components/errormsg'
import './app.css'
function App() {
  let food=['Pizza','Burger','Ice Cream','French Fries'];
  // let food=[]
  // if(food.length===0){
  //   return(
      
  //     <>
  //     <p>There is no unhealthy food</p>
  //     </>
  //   )}
  return(
    <>
          <p className='Top'>This is fragments of UnHealthy food</p>
    {/* {food.length===0?<p>There's no Unhealthy items </p>:null} */}
    <Error foodItems={food}></Error>
    <FoodItems foodItems={food}></FoodItems>
      </>
  )
}

export default App
