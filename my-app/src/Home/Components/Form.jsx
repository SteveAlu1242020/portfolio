import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdClose } from "react-icons/md";

const Form = (props) => {
  const { handler } = props;
  console.log(handler, "handler test");
  const form = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    handler();
    alert("Thank You, Your Email Has Been Sent!!");
    emailjs
      .sendForm(
        "service_dn5rzu6",
        "template_35r2skv",
        form.current,
        "user_RR5QBkdxBBQ9ZANgmDXcH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 shadow-xl">
      <div className="relative">
        <div className="span absolute right-0 p-1 cursor-pointer  hover:bg-black bg-gray-700  text-white rounded-bl-lg">
          <MdClose onClick={handler} />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-200 dark:bg-gray-500 rounded-lg px-2 pb-2 pt-7 border-box flex flex-col w-72">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            className="p-2 m-1 border-box rounded border shadow outline-none"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-2 m-1 border-box rounded border shadow outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Phone"
            className="p-2 m-1 border-box rounded border shadow outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-2 m-1 border-box rounded border shadow outline-none"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            name="message"
            className="p-2 m-1 border-box rounded border shadow outline-none"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Send"
            className="bg-black text-white rounded p-1 m-1 border-box cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
