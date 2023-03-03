import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character';

const dummyData = {
  birth_year: "19BBY",
  eye_color: "blue",
  gender: "male",
  hair_color: "blond",
  height: "172",
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "fair",
  }

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        //console.log(res.data);
        setPerson(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { person.map( elem => {
        <Character attr={elem} />
      })};
    </div>
  );
}

export default App;

/**
 
birth_year: "19BBY"
eye_color: "blue"
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
mass: "77"
name: "Luke Skywalker"
skin_color: "fair"

 */