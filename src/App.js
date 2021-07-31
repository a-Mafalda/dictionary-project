import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        Dictionary 
    </header>
        <div className="structure">
        <main>
      <p className="subHeader">look me up!</p>
      <Dictionary />
    </main>
    </div>
     </div>
      </div>
  );
}


