import { useContext, useState } from "react";

import { formValidation } from "../../utils/validation";
import './Auth.css';
import { AuthenticationContext } from "../../context/AuthenticationContext";

const Authentication = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({
    email: {
      error: false,
      messages: [],
    }, password: {
      error: false,
      messages: [],
    }
  });
  const { login } = useContext(AuthenticationContext)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMessages = formValidation({ [name]: value });

    setFormErrors((prev) => (
      {
        ...prev,
        [name]: {
          messages: errorMessages[name],
          error: Boolean(errorMessages[name].length)
        }
      }
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formValidation(formData);

    if (email.length || password.length) {
      alert('Invalid data');
      return;
    }
    login(formData);
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__form-item">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Write your email..."
            onChange={handleChange}
            value={formData.email}
            className={formErrors.email.error ? 'error' : ''}
          />
          <div className="auth__form-item-errors">
            {formErrors.email.error && (
              <>
                <p>Must: </p>
                {formErrors.email.messages.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="auth__form-item">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Write your password..."
            onChange={handleChange}
            value={formData.password}
            className={formErrors.password.error ? 'error' : ''}
          />
          <div className="auth__form-item-errors">
            {formErrors.password.error && (
              <>
                <p>Must have: </p>
                {formErrors.password.messages.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Authentication;