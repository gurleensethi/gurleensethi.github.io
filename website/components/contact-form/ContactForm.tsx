import { FC } from "react";

export interface ContactFormProps {}

export const ContactForm: FC<ContactFormProps> = () => {
  return (
    <form>
      <fieldset className="m-4 p-4 flex flex-col border rounded-md">
        <legend className="text-lg px-2">Contact Me</legend>
        <div className="flex flex-col sm:flex-row">
          <input
            className="py-3 text-lg bg-black border-b rounded-none focus:outline-none sm:mr-2 sm:flex-1 mb-4"
            placeholder="Email"
            type="email"
          />
          <input
            className="py-3 text-lg bg-black border-b rounded-none focus:outline-none sm:flex-1 mb-4"
            placeholder="Name"
            type="name"
          />
        </div>
        <textarea
          className="py-3 text-lg bg-black border-b rounded-none focus:outline-none resize-none mb-8"
          placeholder="Message"
        />
        <button className="btn">Submit</button>
      </fieldset>
    </form>
  );
};
