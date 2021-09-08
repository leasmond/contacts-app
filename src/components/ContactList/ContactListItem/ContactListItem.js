import { Link } from "react-router-dom";
import Edit from "../../../assets/svg/edit.svg";
import Information from "../../../assets/svg/information.svg";

const ContactListItem = ({ id, name, username, email, address }) => {
  return (
    <div className="contact-list__content">
      <div className="contact-list__item">
        <p className="contact-list__label">{name}</p>
      </div>
      <div className="contact-list__item">
        <p className="contact-list__label">{username}</p>
      </div>
      <div className="contact-list__item">
        <p className="contact-list__label">{email}</p>
      </div>
      <div className="contact-list__item">
        <p className="contact-list__label">{address}</p>
      </div>
      <div className="contact-list__svg">
        <Link className="link-icon" to={`/contact/edit/${id}`}>
          <img className="icon_edit" height="20" alt="edit" src={Edit} />
        </Link>
        <Link className="link-icon" to={`/contact/information/${id}`}>
          <img height="20" alt="information" src={Information} />
        </Link>
      </div>
    </div>
  );
};

export default ContactListItem;
