function Random (){
    let random =Math.round(Math.random()*10)
    return <div>
        <p style={{'background-color':'lightblue'
        }}>Random number between 1 to 10 is {random} </p>
    </div>
}
export default Random;