import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import heartFilled from '../assets/heart-filled.svg'
import heartEmpty from '../assets/heart-empty.svg'
import { useState } from "react";


const CharacterCard = ({ name, id, imgUrl }) => {
    // const navigate = useNavigate();
    const { favorites, addFavorites, removeFavorites, checkFavorite } = useOutletContext();
    const routeCharacter = `/characterdetailspage/${id}`;
    const [heart, setHeart] = useState(heartEmpty)
    const isFavorite = checkFavorite(id)
    const [ isFav, setIsFav ] = useState(false)

    const handleHeartClick = () => {
        if (isFavorite) {
          removeFavorites(id);
          setHeart(heartEmpty);
          
        } else {
          if (favorites.length <= 5) {
          addFavorites(id);
          setHeart(heartFilled);
        } else {
          alert("Maximum favorites reached!")
        }
      }};
    
    
    return (
        <Card key={id} style={{ margin: "2rem", width: "302px", height: "366px" }}>
              <Link to={routeCharacter} key={id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardImg top src={imgUrl} alt={name} style={{ width: "300px", height: "300px" }} />
                </Link>
              <CardBody>
                <CardTitle>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{ marginLeft: "20px" }}>
                    {name}
                <button onClick={handleHeartClick} style={{border: "none", background: "none"}}>
                    <img src={isFavorite ? heartFilled : heartEmpty} style={{ width: "30px" }} /></button>

                </div>
                </div>
                </CardTitle>
              </CardBody>
          </Card>
    )
}

export default CharacterCard;