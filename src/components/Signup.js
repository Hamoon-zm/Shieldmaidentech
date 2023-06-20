import { useState } from "react";

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  function fnameChangeHandler(event) {
    setFname(event.target.value);
  }
  function lnameChangeHandler(event) {
    setLname(event.target.value);
  }
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }
  function confimPasswordChangeHandler(event) {
    setConfirmPassword(event.target.value);
  }
  function phoneChangeHandler(event) {
    setPhone(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    // Perform login logic with email and password
    console.log("First Name:", fname);
    console.log("Last Name", lname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phone);
    // Reset form fields
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setPhone("");
  }
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input
            type="text"
            id="fname"
            value={fname}
            onChange={fnameChangeHandler}
          />
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            id="lname"
            value={lname}
            onChange={lnameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            required
          />
          <label htmlFor="confirmPassword">Password</label>
          <input
            type="password"
            id="confimPassword"
            value={confimPassword}
            onChange={confimPasswordChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div>
          <button>Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
