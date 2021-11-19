import { useState } from "react";
function Employee() {
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);

  function loginHandler(e) {
    e.preventDefault();
    if (user.length>3)
    {alert("Welcome" + user)}else{alert("invalid user")}
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item)
  }
  return (
    <div>
      <h1>Employee Login</h1>
      <br />
      <br />
      <form onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={userHandler}
          required
        />
        {userErr ? <h3>InValid User Name</h3> : null}
        <br />
        <br />
        <input type="email" placeholder="Enter Email Id" required />

        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          minLength="3"
          maxLength="8"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
export default Employee;
