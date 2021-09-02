import React, { useEffect, useState } from "react";
import { ContactListItem } from "../ContactListItem";

const ContactList = ({ error, isLoaded, contacts }) => {
  const ContactListItems = () =>
    contacts.map((item) => (
      <ContactListItem
        name={item.name}
        username={item.username}
        email={item.email}
      />
    ));

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="contact-list">
        <ContactListItems />
      </div>
    );
  }
};

export default ContactList;
