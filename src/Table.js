
function Table(){
const Employees=[
    {Name:"Murtaza",Email:"murtaza@test.com",Mob:"000"},
    {Name:"Arshad",Email:"arshad@test.com",Mob:"111"},
    {Name:"Sam",Email:"sam@test.com",Mob:"222"},
    {Name:"Peter",Email:"peter@test.com",Mob:"333"}
]
    return(
        <div>
            <h3>Employess List</h3>
            <table border="5" >
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Moble</td>
                </tr>
{Employees.map((items)=> <tr>
    <td>{items.Name}</td>
    <td>{items.Email}</td>
    <td>{items.Mob}</td>
</tr>)}
</table>
        </div>
    )
}
export default Table;