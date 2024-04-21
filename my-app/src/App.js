import logo from './logo.svg';
import './App.css';

import Router from './Router/Router';
import { createContext, useState} from 'react';



export const userData=createContext(null);


function App() {
  const [user, setUser] = useState(null);
  return (
    <userData.Provider value={{user,setUser}}>
    <div className="App">
      <Router/>
     
   

    </div>
    </userData.Provider>
  );
}

export default App;
