import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setAlert('Please set all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input
            value={name}
            id="name"
            name="name"
            type="text"
            className="validate"
            onChange={onChange}
            minLength="5"
            required
          />
          <label className="active" htmlFor="name">
            Name
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={email}
            id="email"
            name="email"
            type="email"
            className="validate"
            onChange={onChange}
            required
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
            minLength="6"
            required
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={password2}
            id="password2"
            name="password2"
            type="password"
            className="validate"
            onChange={onChange}
            minLength="6"
            required
          />
          <label className="active" htmlFor="password2">
            Confirm Password
          </label>
        </div>
      </div>

      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Register
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};

export default Register;
