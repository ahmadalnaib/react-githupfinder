import React from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import './App.css';

 class App extends React.Component {
   render() {
     
     return (
       <div className="App">
         {/* add props */}
         <Navbar title="Githup" icon="fab fa-github"/>
         <div className="container">

          <Users/>
         </div>
       </div>
     );
   }
}

export default App;
