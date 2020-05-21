import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
/*function MyInfo(){
  return(
  <div className="MyInfo">
    <header className="MyInfo-header">
      <h1 class="header">Солдовник Никита</h1>
      <p class>Меня зовут Никита Солодовник.Я родился 24 сентября</p>
      <p>Живу в городе Харькове. Люблю путешествия на велосипеде. Это очень захватывающе, красивые виды, интересные места, в которые не попадешь на машине. </p>
    <p>Страны в которых я хочу побывать:</p>
    <ul>
      <li>Китай</li>
      <li>Япония</li>
      <li>Швеция</li>
    </ul>
    </header>
  </div>
  )
  } */
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;