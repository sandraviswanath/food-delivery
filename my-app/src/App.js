import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import Router from './Router/Router';
import { createContext, useState} from 'react';



export const userData=createContext({})


function App() {
  const [user, setUser] = useState({})
  return (
    <userData.Provider value={{user,setUser}}>
    <div className="App">
      <Router/>
     
   

    </div>
    </userData.Provider>
  );
}

export default App;
