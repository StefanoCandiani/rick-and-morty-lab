import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import Characters from "./Characters"

// function Characters() {
//     const [characters, setCharacters] = useState([]);
  
//   useEffect(() => {
//     axios.get(`https://rickandmortyapi.com/api/character`)
//       .then((res) => {
//         console.log(res);
//       });
//   }, []);

//   return null;
// }

ReactDOM.render(<Characters />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
