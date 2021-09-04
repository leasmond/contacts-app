import { ContactListItem } from "../ContactListItem";

const ContactList = ({ error, isLoaded, contacts }) => {
  const ContactListItems = () =>
    contacts.map((item) => (
      <ContactListItem
        name={item.name}
        username={item.username}
        email={item.email}
        address={item.address.city}
      />
    ));

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="contact-list">
        <div className="contact-list__header">
          <div className="contact-list__name">
            <p>Имя, фамилия</p>
          </div>
          <div className="contact-list__username">
            <p>Никнейм</p>
          </div>
          <div className="contact-list__email">
            <p>E-mail</p>
          </div>
          <div className="contact-list__city">
            <p>Город</p>
          </div>
        </div>
        <ContactListItems />
      </div>
    );
  }
};

export default ContactList;
