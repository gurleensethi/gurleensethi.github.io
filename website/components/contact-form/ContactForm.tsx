import React, { FC } from "react";
import styles from "./ContactForm.module.css";

export interface ContactFormProps {}

export const ContactForm: FC<ContactFormProps> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 mb-12" id="contact-me">
      <h1 className="section-heading">Contact Me</h1>
      <div className="mb-12 md:flex justify-center">
        <a
          href="mailto:contactgurleensethi@gmail.com"
          className={`${styles["email-container"]} transition flex items-center rounded-md px-4 py-3 mb-4 md:mr-8 ring-1 ring-white hover:bg-gray-900`}
        >
          <img
            src="/images/email.svg"
            className={`h-5 mr-4 inline-block ${styles["animate-email"]}`}
            alt="email"
          />
          <div className="flex-1">
            <span className="text-xl">Send an Email</span>
          </div>
        </a>
        <a
          href="tel:contactgurleensethi@gmail.com"
          className={`${styles["phone-container"]} flex items-center rounded-md px-4 py-3 mb-4 ring-1 ring-white hover:bg-gray-900`}
        >
          <img
            src="/images/phone.svg"
            className={`h-5 mr-4 ${styles["animate-phone"]}`}
            alt="phone"
          />
          <div className="flex-1">
            <span className="text-xl">Give me a Call</span>
          </div>
        </a>
      </div>
      <form
        className="p-4 pt-6 flex flex-col border rounded-md relative"
        onSubmit={handleSubmit}
      >
        <legend className="text-2xl px-2 absolute bg-black -top-5">
          Message
        </legend>
        <div className="flex flex-col sm:flex-row">
          <input
            className="py-3 text-xl bg-black border-b rounded-none focus:outline-none sm:mr-2 sm:flex-1 mb-4"
            placeholder="Email"
            type="email"
          />
          <input
            className="py-3 text-xl bg-black border-b rounded-none focus:outline-none sm:flex-1 mb-4"
            placeholder="Name"
            type="name"
          />
        </div>
        <textarea
          className="py-3 text-xl bg-black border-b rounded-none focus:outline-none resize-none mb-8"
          placeholder="Message"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
