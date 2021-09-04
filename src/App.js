import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { Main } from "./wrapper/Main";
import { getDataFromServer } from "./data";
import "./App.css";
import { ContactInfo } from "./components/ContactInfo";

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
      <Main contactsCount={contacts.length}>
        <Switch>
          <Route exact path="/">
            <ContactList
              error={error}
              isLoaded={isLoaded}
              contacts={contacts}
            />
          </Route>
          <Route path="/contact/edit"></Route>
          <Route path="/contact/information">
            <ContactInfo contacts={contacts} />
          </Route>
          <Route></Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
