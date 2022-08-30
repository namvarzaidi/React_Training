import logo from './logo.svg';
import './App.css';
import BookCase from './header';
import BookCaseFooter from './footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookCase/>

      </header>
      <footer>

        <BookCaseFooter/>

      </footer>
    </div>
  );
}

export default App;
