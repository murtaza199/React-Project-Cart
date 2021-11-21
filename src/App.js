import Users from './Users';
import Hoc from './HocUsers';
function App() {
 
 return (
    <>
 <Users></Users>
    <Hoc comp={Users}/>
    </>
  );
}

export default App;
