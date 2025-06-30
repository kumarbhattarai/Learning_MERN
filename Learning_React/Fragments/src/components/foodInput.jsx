const FoodInput=()=>{
return(
    <>
    <input type="text" placeholder="Input food item here" className="w-[100%] p-2" onChange={(event)=>console.log(event)}/>
    </>
)
}
export default FoodInput;