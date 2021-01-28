import React from 'react';
import axios from 'axios'; 

function Characters() {
    const [characters, setCharacters] = React.useState([]);
  
    React.useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const newCharacters = res.data.results.map(obj => {
                    console.log(obj.name);
                })
            })
    }, []);

  return (
      <h1> Hello </h1>
  );


  }
export default Characters;