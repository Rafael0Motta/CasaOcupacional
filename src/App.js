import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";

/* Components */
import Home from "./Components/Home";
import Companies from "./Components/Companies";

/* Pages */

function App() {
  return (
    <>
      <header>
        <Home />
      </header>
      <main>
        <Companies />
      </main>
    </>
  );
}

export default App;
