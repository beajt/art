function ArtPiece(props) {
  return (
    <div className="artPiece">
      <h2>{props.title}</h2>
      <img src={props.imagePath} alt={props.alt} />
    </div>
  );
}

export default ArtPiece;
