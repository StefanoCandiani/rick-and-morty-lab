import React from 'react';
import axios from 'axios'; 

function Characters() {
    const [characters, setCharacters] = React.useState([]);
  
    React.useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const newCharacters = res.data.results.map(obj => obj)
                
                setCharacters(newCharacters);

            })
    }, []);

  return (
      <div className="items-center">
              {characters.map(char => (
                  <div key={char.name} className='bg-invisible dib br3 pa3 ma2 grow bw2 shadow-5'>
                    <img className="image" src={char.image} alt={char.name}/>
                    <h3 className="name">{char.name}</h3>
                    <p className="status">Status: {char.status}</p> 
                    <p className="location">Location: {char.location.name}</p>
                    <p className="species">Species: {char.species}</p>                     
                  </div>
              ))}
      </div>
  );


  }
export default Characters;