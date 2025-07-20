import React from "react";
import "./Form.css";

const occasionOptions = [
  "",
  "Birthday",
  "Anniversary",
  "Thank You",
  "Congratulations",
  "Get Well Soon",
  "Farewell",
  "New Year",
  "Christmas",
  "Other"
];

const Form = ({ onChange, Values }) => {
  return (
    <section className="Form">
      <h2>Create Your Greeting Card</h2>
      <form autoComplete="off">
        <div>
          <label htmlFor="Recipient">Recipient Name</label>
          <input
            type="text"
            id="Recipient"
            name="Recipient"
            value={Values.Recipient}
            placeholder="Enter recipient's name"
            required
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="Occasion">Occasion</label>
          <select
            id="Occasion"
            name="Occasion"
            value={Values.Occasion}
            required
            onChange={onChange}
          >
            {occasionOptions.map((option, idx) => (
              <option key={idx} value={option}>
                {option === "" ? "Select occasion" : option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            name="Message"
            value={Values.Message}
            placeholder="Write your greeting message"
            required
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="Sender">Sender Name</label>
          <input
            type="text"
            id="Sender"
            name="Sender"
            value={Values.Sender}
            placeholder="Enter your name"
            required
            onChange={onChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Form;