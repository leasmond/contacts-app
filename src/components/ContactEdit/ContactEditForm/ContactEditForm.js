import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactEditForm = ({ contacts, onSubmit }) => {
  const [index, setIndex] = useState();
  const [contact, setContact] = useState();
  let { id } = useParams();

  useEffect(() => {
    setContact(find(parseInt(id)));
  }, []);

  function find(id) {
    setIndex(contacts.findIndex((p) => p.id === id));
    return contacts.find((p) => p.id === id);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data, index);
      })}
      className="contact-form"
    >
      <div className="contact-form__item">
        <label className="contact-form__label">Name, surname: </label>
        <input
          className="contact-form__input"
          defaultValue={contact?.name}
          {...register("name", { value: contact?.name })}
        />
      </div>
      <div className="contact-form__item">
        <label className="contact-form__label">Nickname: </label>
        <input
          className="contact-form__input"
          defaultValue={contact?.username}
          {...register("username", { value: contact?.username })}
        />
      </div>
      <div className="contact-form__item">
        <label className="contact-form__label">E-mail: </label>
        <input
          className="contact-form__input"
          defaultValue={contact?.email}
          {...register("email", { value: contact?.email })}
        />
      </div>
      <div className="contact-form__item">
        <label className="contact-form__label">City: </label>
        <input
          className="contact-form__input"
          defaultValue={contact?.address.city}
          {...register("address.city", { value: contact?.address.city })}
        />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      <Link className="contact-form__button" to="/">
        <button className="button_back">come back</button>
      </Link>
      <input className="button_save" type="submit" value="submit" />
    </form>
  );
};

export default ContactEditForm;
