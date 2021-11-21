
import './App.css';
import {Table} from "react-bootstrap"
function App() {
  let arr =[
    {name:"Murtaza" , email:"murtaza@test.com", addr:"Delhi", mobile:"111"},
    {name:"Hassan" , email:"hassan@test.com", addr:"Noida", mobile:"222"},
    {name:"Ansari" , email:"ansari@test.com", addr:"Godda", mobile:"333"},
    {name:"Mohammad" , email:"mohammad@test.com", addr:"Nima", mobile:"444"},
  ]
  
  
  return (
    <div className="App">
      <h2>Employee Table </h2>
      <Table striped bordered hover >
        <tbody>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Mobile</td>
            </tr>
       {arr.map((data,i)=> <tr key={i}>
         <td>{i+1}</td>
        <td>{data.name} </td>
        <td>{data.email} </td>
        <td>{data.addr} </td>
        <td>{data.mobile} </td>
      </tr>)} 
      </tbody>
      </Table>
    </div>
  );
}

export default App;
