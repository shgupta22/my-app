import logo from './logo.svg';
import './App.css';

let name = "Testing"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div>
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti commodi, cupiditate a modi corporis veritatis voluptatem quia laudantium id ipsa placeat quaerat est porro consectetur, ut reprehenderit maxime temporibus quasi.
        </p>
      </div>
    </>
  );
}

export default App;
