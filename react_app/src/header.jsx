const bookCase = () => {
    const book = {
      title: "Coders",
      author: "Clive Thompson",
      startedReading: "True",
      rating: 7,
    };
    return (
      <div>  
         <h1>{book.title}</h1>
         <h1>{book.author}</h1>
         <h1>{book.startedReading}</h1>
         <h1>{book.rating}</h1>
      </div>
    );
  };
  export default bookCase;