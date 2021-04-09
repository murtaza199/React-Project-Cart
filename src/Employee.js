import { Table } from "react-bootstrap";

function Employee()
{
  const ITD=[
    {Name: "Murtaza Hassan" ,post:"Frontend Developer" ,addr:"Delhi",contact:"000"},
    {Name: "Rock Jhonson" ,post:"Backend Developer" ,addr:"London",contact:'111'},
    {Name: "Under Taker" ,post:"IT head" ,addr:"New york",contact:"222"},
    {Name: "Dave Batista" ,post:"Frontend Developer" ,addr:"Gurugram",contact:"333"},
    {Name: "John Cena" ,post:"Frontend Developer" ,addr:"bangluru",contact:"444"}
  ]
return(
  <div>
   <h2> IT Department List </h2>
   <Table striped bordered hover variant="dark" >
     <tbody>
     <tr>
       <td>Name</td>
       <td>Post</td>
       <td>Address</td>
       <td>Contact</td>
     </tr>
{ITD.map((data,i)=>
<tr key="i">
  <td><h3>{data.Name}</h3></td>
  <td><h3>{data.post}</h3></td>
  <td><h3>{data.addr}</h3></td>
  <td><h3>{data.contact}</h3></td>
</tr>)}
</tbody>
</Table>
  </div>
)

}
export default Employee;