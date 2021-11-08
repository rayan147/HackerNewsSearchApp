const Card = ( item ) => {
  return (
    <div>
      <h2>{item.title}</h2>
      
      <p>by {item.author}</p>
      <p>{`${item.created_at}`}</p>
      <p>comments {item.num_comments}</p>
    </div>
  );
};

export default Card;
