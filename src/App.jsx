import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//components
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Loader } from "./Components/Loader/Loader";

//context
import { GlobalStorage } from "./Contexts/GlobalStorage";

//pages
import Home from "./Pages/Home/Home";
import Transactions from "./Pages/Transactions/Transactions";

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2500);
  }, []);
  return (
    <GlobalStorage>
      {!done ? (
        <Loader />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Home exact path="/" />
            <Transactions path="/transactions" />
          </Switch>
          <Footer />
        </Router>
      )}
    </GlobalStorage>
  );
}

export default App;
