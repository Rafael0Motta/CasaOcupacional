import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";

/* Components */
import Home from "./Components/Home";
import Companies from "./Components/Companies";
import Welcome from "./Components/Welcome";

/* Pages */

function App() {
  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <Companies />
        <Welcome />
      </main>
    </>
  );
}

export default App;
