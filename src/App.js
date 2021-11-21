
import './App.css';
import Users from './Users';
function App() {
 
  function parentAlert(name){
    alert(name)
  }
  return (
    <>
    <Users data={parentAlert}/>
    </>
  );
}

export default App;
