import '../tailwind.css';
const Container=(props)=>{
return <div className='mt-2 ml-3 p-2 border-1 boder-black w-[50%] min-w-[300px] rounded '>{props.children}</div>;
}
export default Container;