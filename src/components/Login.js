import { useState } from "react";
import Modal from "./Modal";
import Signup from "./Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup,setSignup] = useState(false)

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    // Perform login logic with email and password
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setEmail("");
    setPassword("");
  }
  function accountHandler() {
    setSignup(true)
  }
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
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
      </div>
      <div>
        <button>Submit</button>
        <p onClick={accountHandler}>Don't have an account?</p>
        {signup && <Modal>
            <Signup/>
            </Modal>}
      </div>
    </form>
  );
}

export default Login;
