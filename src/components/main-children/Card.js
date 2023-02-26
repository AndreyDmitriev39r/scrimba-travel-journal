function Card({imageURL}) {
  return (    
    <div className="card-container">
      <figure>
        <img className="card--photo" src={imageURL}alt="card" />
      </figure>
      <div className="text-container">
        <p>bunch of text</p>
      </div>
    </div>
  );
}

export default Card;