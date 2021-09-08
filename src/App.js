import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { Main } from "./wrapper/Main";
import { getData, setData } from "./data";
import { ContactInfo } from "./components/ContactInfo";
import { ContactEdit } from "./components/ContactEdit";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [counter, setCounter] = useState(0); // spike

  useEffect(() => {
    (async () => {
      try {
        setContacts(await getData());
        setIsLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  const onSubmit = (data, index) => {
    const tmp = contacts;
    tmp[index] = {
      ...tmp[index],
      ...data,
    };
    setContacts(tmp);
    setCounter(counter + 1);
    setData(tmp);
  };

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
          <Route path="/contact/edit/:id">
            <ContactEdit contacts={contacts} onSubmit={onSubmit} />
          </Route>
          <Route path="/contact/information/:id">
            <ContactInfo contacts={contacts} />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
