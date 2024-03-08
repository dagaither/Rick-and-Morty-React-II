import { useState } from 'react'
import  { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (id) => {
    const updatedFavorites = [...favorites, id]
    setFavorites(updatedFavorites)
    console.log(favorites)
  }

  const removeFavorites = (id) => {
    const updatedFavorites = favorites.filter(c => c !== id);
    setFavorites(updatedFavorites);
  };

  const checkFavorite = (id) => {
    if (favorites.includes(id)) {
      console.log(id)
      return true
    } else {
      return false
    }
  }

  console.log('Favorites:', favorites)


  const contextObj = {
    favorites,
    addFavorites,
    removeFavorites,
    checkFavorite,
  }

  return (
    <>
    <NavBar />
    <div className="mainContent" style={{paddingTop: "6rem"}}>
    <Outlet context={contextObj}/>
    </div>
    </>
  )
}

export default App
