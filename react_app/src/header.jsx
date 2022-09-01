const bookCase = () => {
    const book = {
      title: "Coders",
      author: "Clive Thompson",
      startedReading: "True",
      rating: 7,
    };
    return (
      <div>  
         <h3>{book.title}</h3>
         <h3>{book.author}</h3>
         <h3>{book.startedReading}</h3>
         <h3>{book.rating}</h3>
      </div>
    );
  };
  export default bookCase;