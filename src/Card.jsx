import cardImage from './assets/card-image.webp'

function Card() {
return(
<div className ="card">
    <img className='card-image' src={cardImage} alt="frontend developer" />
    <h2 className ="card-title">Arpit Chauhan</h2>
    <p className ="card-text">frontend developer and learn vibe coding</p>
</div>
)
}

export default Card