import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function LoginPage() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  async function getUsers(userName: string, userPassword: string) {
    const user = await fetch(
      `http://localhost:3000/users?name=${userName}&password=${userPassword}`
    );
    if (user.ok) {
      let json = await user.json();
      console.log(json);
      navigate("/home");
    }
  }
  const HandleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userName || !userPassword) {
      return;
    }
    getUsers(userName, userPassword);
  };
  return (
    <div className="bgc center">
      <div className="container">
        <div className="header">
          <h1>
            <span className="l">L</span>OGIN
          </h1>
        </div>
        <form onSubmit={HandleSumbit}>
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            className="inp"
            name="uname"
            required
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            className="inp"
            name="psw"
            required
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <button type="submit" disabled={!userName || !userPassword}>
            Enter
          </button>
        </form>
        <div className="signup">
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}
