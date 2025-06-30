import './tailwind.css'
import FoodItems from './components/foodItems'
import Error from './components/errormsg'
import './app.css'
import Container from './components/container';
import FoodInput from './components/foodInput';
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
    <Container>
          <p className='Top'>This is fragments of UnHealthy food</p>
          <FoodInput></FoodInput>
    {/* {food.length===0?<p>There's no Unhealthy items </p>:null} */}
    <Error foodItems={food}></Error>
    <FoodItems foodItems={food}></FoodItems>
      </Container>
      <Container>
        <p>This is another container</p>
      </Container>
</>
  )
}

export default App
