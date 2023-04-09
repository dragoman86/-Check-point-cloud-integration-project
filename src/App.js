import NavBar from "./pages/Navbar";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <Map />
      </body>
    </div>
  );
}

export default App;
