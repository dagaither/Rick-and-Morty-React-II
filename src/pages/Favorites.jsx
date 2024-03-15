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
        </div>
    );
};

export default Favorites;
