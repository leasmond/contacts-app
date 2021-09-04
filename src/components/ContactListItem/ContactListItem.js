import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from "../../assets/svg/edit.svg";
import Information from "../../assets/svg/information.svg";

const ContactListItem = ({ name, username, email, address }) => {
  return (
    <div className="contact-list-item">
      <div className="contact-list__name">{name}</div>
      <div className="contact-list__username">{username}</div>
      <div className="contact-list__email">{email}</div>
      <div className="contact-list__city">{address}</div>
      <div className="contact-list-item__svg">
        <Link className="link-icon" to="/contact/edit">
          <img height="20" alt="edit" src={Edit} />
        </Link>
        <Link className="link-icon" to="/contact/information">
          <img height="20" alt="information" src={Information} />
        </Link>
      </div>
    </div>
  );
};

export default ContactListItem;
