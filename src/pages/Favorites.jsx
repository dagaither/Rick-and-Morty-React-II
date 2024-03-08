import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { useOutletContext } from 'react-router-dom';

const Favorites = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { favorites, addFavorites, removeFavorites, checkFavorite } = useOutletContext();

    useEffect(() => {
        filterFavorites(); // Fetch character details when the component mounts or when favorites change
    }, [currentPage, favorites]);

    const handlePrevPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };
    
    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const filterFavorites = async () => {
        try {
            const promises = favorites.map(async favorite => {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${favorite}`);
                const data = await response.json();
                return data;
            });

            const charactersData = await Promise.all(promises);
            setCharacters(charactersData);
        } catch (error) {
            console.error("Error fetching character data", error);
        }
    }

    return (
        <div>
            <h2 className="mainH2">Favorites</h2>
            <div className="card-container" style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

            {characters.map(c =>
                <CharacterCard
                id = {c.id}
                name = {c.name}
                imgUrl = {c.image}
                key = {c.id}
                />
                )}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px'}}>
                <span onClick={handleFirstPage} style={{padding: "5px", width: "80px", color: "#08BAE3", cursor: "pointer"}}>First</span>
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={{padding: "5px", width: "120px", margin: "0 5px"}}>Previous Page</button>
                <div style={{color: 'gray', width: '120px', padding: '5px' }}><span>Page {currentPage} of {totalPages}</span></div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} style={{padding: "5px", width: "120px", margin: "0 5px"}}>Next Page</button>
                <span onClick={handleLastPage} style={{padding: "5px", width: "80px", margin: "0 5px", color: "#08BAE3", cursor: "pointer"}}>Last</span>
            </div>
        </div>
    );
};

export default Favorites;
