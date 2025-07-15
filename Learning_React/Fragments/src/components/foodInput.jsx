const FoodInput=(handleInput)=>{
return(
    <>
    <input type="text" placeholder="Input food item here" className="w-[100%] p-2" onChange={handleInput}/>
    </>
)
}
export default FoodInput;