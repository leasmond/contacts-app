import { ContactEditForm } from "./ContactEditForm";

const ContactEdit = ({ contacts, onSubmit }) => {
  return (
    <div>
      <ContactEditForm contacts={contacts} onSubmit={onSubmit} />
    </div>
  );
};

export default ContactEdit;
