import {useState} from "react"
function Users(){
const [count, setCount] = useState(0)
    return(
        <>
       <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </>
    )
}
export default Users;