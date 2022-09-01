const bookCaseFooter = () => {
    const book = {
      contact: "example@gmail.com",
      name: "Namvar Zaidi"
    };
    return (
      <div>  
         <h2>Email: {book.contact}</h2>
         <h3>{book.name}</h3>

      </div>
    );
  };
  export default bookCaseFooter;