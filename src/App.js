import React from 'react';
import Greeting from './Greeting';


function App() {
  return (
    <div>
      <h1>Hello World from Hassan</h1>
      <Greeting your_reply="Hassan: How are you?" my_reply="Ali: I am fine thank you for asking... what about you?" />
      <Greeting your_reply="Hassan: I am fine too..." my_reply="Ali: what are you doing these days?" />
      <Greeting your_reply="Hassan: Well I am learning React Coding... what are you doing?" my_reply="Ali: Nothing :P " />
      <Greeting your_reply="Hassan: You should learn React too" my_reply="Ali: OK i will " />
      
    </div>
   
  );
}

export default App;
