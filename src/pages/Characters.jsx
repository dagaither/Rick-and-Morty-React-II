import { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
                const data = await response.json();
                setCharacters(data.results);
                setTotalPages(data.info.pages);
                console.log(characters)
                
            } catch (error) {
                console.error("Error fetching character data", error);
            }
        };

        fetchCharacters();
    }, []);
    
    return (
        <div>
            <h2 className="mainH2">Rick and Morty Characters</h2>
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

export default Characters;
