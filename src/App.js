
import './App.css';
import Axios from 'axios'

function App() {
 const getUser = () => {
    Axios.get('https://reqres.in/api/users?page=2').then((response) => {
      console.log(response);
    }
    );
 };
  return( 
    <div>
    <button onClick={getUser}> Get User</button>
    </div>
  );
}

export default App;
