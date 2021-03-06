import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAlert('Please fill all fields');
    } else {
      login({ email, password });
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <form onSubmit={onSubmit}>
        <div
          className="row"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="input-field col s6"
            style={{ margin: 0, marginBottom: '20px' }}
          >
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

        <div
          className="row"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="input-field col s6" style={{ margin: 0 }}>
            <input
              value={password}
              id="password"
              name="password"
              type="password"
              className="validate"
              onChange={onChange}
              required
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
          style={{ display: 'block', margin: '0 auto' }}
        >
          LogIn
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Login;
