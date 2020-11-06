import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ starData, setStarData ] = useState();

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  function useFetchData(id){
    function fetchData(id){
      useEffect((id)=>{
        axios
          .get(`https://swapi.dev/api/people/${id}`)
          .then((res)=>{
            setStarData(res.data);
            console.log(starData);
          })
          .catch((err)=>{
            console.log(err);
          });
      }, []);
    }
    fetchData(id);
  }

  const starCharacters = [1, 2, 3, 4, 5];

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character starData={starData} setStarData={setStarData} fetchData= {fetchData} starCharacters={starCharacters}/>
    </div>
  );
}

export default App;
