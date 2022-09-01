import logo from './logo.svg';
import './App.css';
import BookCase from './header';
import BookCaseFooter from './footer';
import PropsExample from './components-props/propsExercise';
import WebpageTitle from './headerActual';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebpageTitle/>        

      </header>

      <body className="App-body">
        <BookCase/>
        <PropsExample/>

      </body>

      <footer className="App-footer">

        <BookCaseFooter/>

      </footer>
    </div>
  );
}

export default App;
