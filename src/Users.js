function Users(props){
let name="Murtaza Hassan"
    return(
        <>
       <h1> User Component</h1>
       <button onClick={()=>props.data(name)}>Click Here</button>
        </>
    )
}
export default Users;