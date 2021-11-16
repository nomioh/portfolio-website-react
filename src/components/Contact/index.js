import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex-md-row">
        <form action="nomiohanyan@gmail.com">
          <h1 id="title">Contact</h1>
          <br />
          <p>
            Name <input type="text" name="Full Name" id="name" />
          </p>
          <br />
          <p>
            Email
            <input type="email" name="email" id="email" />
          </p>
          <br />
          <p>
            Message <br />
            <textarea name="message"></textarea>
          </p>
          <br />
          <button className="Submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
