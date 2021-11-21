import Users from './Users';
import HocUsers from './HocUsers';
function App() {
 
 return (
    <>
    <Users/>
    <HocUsers comp={Users}/>
    </>
  );
}

export default App;
