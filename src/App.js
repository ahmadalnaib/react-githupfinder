import React from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';

 class App extends React.Component {
   render() {
     
     return (
       <div className="App">
         {/* add props */}
         <Navbar title="Githup" icon="fab fa-github"/>
         
       </div>
     );
   }
}

export default App;
