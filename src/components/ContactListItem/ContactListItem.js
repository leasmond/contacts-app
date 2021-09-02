const ContactListItem = ({ name, username, email }) => {
  return (
    <div className="contact-list-item">
      <div className="contact-list-item__name">{name}</div>
      <div className="contact-list-item__username">{username}</div>
      <div className="contact-list-item__email">{email}</div>
    </div>
  );
};

export default ContactListItem;
