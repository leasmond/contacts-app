import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import { Main } from "./wrapper/Main";
import { getDataFromServer } from "./data";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setContacts(await getDataFromServer());
        setIsLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);
  return (
    <Router>
      <Main>
        <Switch>
          <Route path="/">
            <ContactList
              error={error}
              isLoaded={isLoaded}
              contacts={contacts}
            />
          </Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
