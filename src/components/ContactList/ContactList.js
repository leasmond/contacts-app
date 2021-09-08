import { ContactListItem } from "./ContactListItem";

const ContactList = ({ error, isLoaded, contacts }) => {
  const ContactListItems = () =>
    contacts?.map((item) => (
      <ContactListItem
        id={item.id}
        name={item.name}
        username={item.username}
        email={item.email}
        address={item.address.city}
      />
    ));

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="contact-list">
        <div className="contact-list__header">
          <div className="contact-list__item">
            <p className="contact-list__label">Name, surname</p>
          </div>
          <div className="contact-list__item">
            <p className="contact-list__label">Nickname</p>
          </div>
          <div className="contact-list__item">
            <p className="contact-list__label">E-mail</p>
          </div>
          <div className="contact-list__item">
            <p className="contact-list__label">City</p>
          </div>
        </div>
        <ContactListItems />
      </div>
    );
  }
};

export default ContactList;
