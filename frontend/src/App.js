import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  //function will run every time an argument changes in the given array
  useEffect(() => {
    setLoading(true)
    //cancel will get updated everytime axios is called
    let cancel
    axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)}
      ).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
  });

  //Gets called everytime useEffect is called (will cancel previous requests when a new request is made)
  return () => {cancel()}
  }, [currentPageUrl])

  //will update the currentPageUrl which, in return, forces useEffect to update as well
  function goToNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
    <PokemonList pokemon = {pokemon} />
    <Pagination
    goToNextPage = {nextPageUrl ? goToNextPage : null}
    goToPrevPage = {prevPageUrl ? goToPrevPage : null}
    />
    </>
  );
}

export default App;
