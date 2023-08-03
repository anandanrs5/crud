import { FaTrash } from "react-icons/fa";

const Content = ({ items, handleCheck,handleDelete }) => { 
    return (
        <>
          <ul>
          {Array.isArray(items)
        ? items.map(element => {
            return <li className='item' key={element.id} id="list" >
            <input type="checkbox" checked={element.checked} 
                onClick={() => handleCheck(element.id)} id='chk'/>

            <p style={{ marginTop:"15px"}}>{element.item}</p>
            
            <FaTrash onClick={() => handleDelete(element.id)}  
                role="button"  tabIndex="0"  className='para' />
           </li >
          })
        : null}
         
        </ul>
        </>
    )
 }

export default Content;

//  function handleName() {
//     const names = ['earn','grow','give'];
//     const int = Math.floor(Math.random() * 3);
//     setName(names[int]);
// }const [name, setName] = useState("earn");

/* <button onClick={() =>handleClick("anandan")}>Button</button> */ 
/* <button onClick={(e) =>handleClick(e)}>Button</button> */ 
// function increment(){
//     setCount((count)=>{return count +1});
//     // setCount((count)=>{return count +1});
//     // setCount((count)=>{return count +1});
// }
// const handleClick1=(name)=>{
//     return console.log("thanks "+name);
// }
// function decrement(){
//     setCount(count -1);
// }
// const handleClick=(e)=>{
//     return console.log(e.target.innerText);
// }
/* <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button> */