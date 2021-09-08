import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactInfo = ({ contacts }) => {
  let { id } = useParams();
  console.log(id);

  let person = find(parseInt(id));
  function find(id) {
    return contacts.find((p) => p.id === id);
  }
  console.log(person);

  return (
    <div className="contact-info">
      <div className="contact-info__label">
        <p>Name, surname: {person?.name}</p>
      </div>
      <div className="contact-info__label">
        <p>Nickname: {person?.username}</p>
      </div>
      <div className="contact-info__label">
        <p>E-mail: {person?.email}</p>
      </div>
      <div className="contact-info__label">
        <p>City: {person?.address.city}</p>
      </div>
      <Link to="/">
        <button className="button_back">come back</button>
      </Link>
    </div>
  );
};

export default ContactInfo;
