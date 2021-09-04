const ContactInfo = ({ contacts }) => {
  return (
    <div className="contact-info">
      {contacts.map((item) => (
        <div>
          <div className="contact-list__name">
            <p>Имя, фамилия: {item.name}</p>
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
      ))}
    </div>
  );
};

export default ContactInfo;
