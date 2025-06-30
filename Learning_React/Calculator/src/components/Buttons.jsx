export default function Button(){
    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
<>
<div className='mx-10 grid grid-cols-3 gap-3 '>
    { buttonNames.map((item)=>(
        <button className='p-4 border-1 rounded-lg bg-gray-200 mb-2'>{item}</button>

        ))}
        </div>
</>
    )
}