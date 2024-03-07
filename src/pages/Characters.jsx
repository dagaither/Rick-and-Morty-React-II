import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const Characters2 = () => {
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
            } catch (error) {
                console.error("Error fetching character data", error);
            }
        };

        fetchCharacters();
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    return (
        <div>
            <h2 className="mainH2">Rick and Morty Characters</h2>
            <div className="card-container" style={{ marginTop: "2rem", width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {characters.map((character, index) => (
                    <Card key={index} width="300px" style={{ margin: "2rem" }}>
                        <CardImg top src={character.image} alt={character.name} />
                        <CardBody>
                            <CardTitle>{character.name}</CardTitle>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px'}}>
                <button onClick={handlePrevPage} disabled={currentPage === 1} style={{padding: "5px", width: "120px", margin: "0 5px"}}>Previous Page</button>
                <div style={{color: 'gray', width: '200px', padding: '5px' }}><span>Page {currentPage} of {totalPages}</span></div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} style={{padding: "5px", width: "120px", margin: "0 5px"}}>Next Page</button>
            </div>
        </div>
    );
};

export default Characters2;
