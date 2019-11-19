import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import BusinessNeeds from './components/BusinessNeeds/BusinessNeeds.component';
import We from './components/We/We.component';
import How from './components/How/How.component';
import Tech from './assets/images/tech2.png'
import Contact from './components/Contact/Contact.component';

function App() {
  return (
    <div className="App">
        <Header/>
        <BusinessNeeds/>
        <We/>
        <How/>
        <img src={Tech} width={'100%'} height={'auto'}/>

        <Contact/>
    </div>
  );
}

export default App;
