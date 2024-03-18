import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";

/* Components */
import Home from "./Components/Home";
import Companies from "./Components/Companies";
import Welcome from "./Components/Welcome";
import Services from "./Components/Services";
import ScrollButton from "./Components/ScrollButton";
import Numbers from "./Components/Numbers";
import TabsExames from "./Components/TabsExames";
import TabsCity from "./Components/TabsCity";

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
        <Numbers />
        <Services />
        <TabsExames />
        <TabsCity />
      </main>
      <ScrollButton />
    </>
  );
}

export default App;
