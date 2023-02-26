function Card({imageURL, title, firstDate, lastDate, text}) {
  return (    
    <div className="card-container">
      <figure>
        <img className="card--photo" src={imageURL}alt="card" />
      </figure>
      <div className="text-container">
        <h1 className="card--title">{title}</h1>
        <p className="card--date">{firstDate} - {lastDate}</p>
        <p className="card--text">{text}</p>
      </div>
    </div>
  );
}

export default Card;