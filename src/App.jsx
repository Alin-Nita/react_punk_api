import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SearchBeer from "./containers/SearchBeers";

const App = () => {
  return (
    <>
      <h1>API Beers</h1>
      <Navbar />
      <div class="container">
        <SearchBeer />
      </div>
    </>
  );
};

export default App;
