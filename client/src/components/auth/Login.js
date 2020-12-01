import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input
            value={email}
            id="email"
            name="email"
            type="email"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="email">
            Email
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={password}
            id="password"
            name="password"
            type="password"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>
      </div>

      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        LogIn
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export default Login;
