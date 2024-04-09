import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [valuesButoon, setValuesButton] = useState({
    user: { value: '', isValid: false },
    pass: { value: '', isValid: false },
  });
  const [showMessage, setShowMessage] = useState(false);
  const [showMessagePass, setShowMessagePass] = useState(false);

  function validateButton(e) {
    const newValuesButton = { ...valuesButoon };
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const nameInput = e.target.name;
    const inputValue = e.target.value;
    if (nameInput == "user") {
      const Regex = new RegExp(usernameRegex);
      const isDataValid = Regex.test(inputValue);

      if (!isDataValid) {
        setShowMessage(true);
        newValuesButton.user.isValid = false;
      } else {
        setShowMessage(false);
        newValuesButton.user.isValid = true;
      }
    } else {
      const Regex = new RegExp(passRegex);
      const isDataValid = Regex.test(inputValue);

      if (!isDataValid) {
        setShowMessagePass(true);
        newValuesButton.pass.isValid = false;
      } else {
        setShowMessagePass(false);
        newValuesButton.pass.isValid = true;
      }
    }
    setValuesButton(newValuesButton);
  }

  const isValid = valuesButoon.pass.isValid && valuesButoon.user.isValid;
  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
      <div className='row '>
        <div className='col-md-12 w-100'>
          <form className='fomStyle bg-white p-3 rounded w-100'>
            <div className="form-group m-5 ">
              <label for="exampleInputEmail1" className='mb-3'>Email address</label>
              <input onChange={(e) => validateButton(e)} type="text" className="form-control" name="user" aria-describedby="emailHelp" placeholder="Enter user" />
              {showMessage && <label className='text-danger'>Usuario invalido</label>}
            </div>
            <div className="form-group m-5">
              <label for="exampleInputPassword1" className='mb-3'>Password</label>
              <input onChange={(e) => validateButton(e)} type="password" className="form-control" name="pass" placeholder="Password" />
              {showMessagePass && <label className='text-danger'>Contraseña Invalida</label>}
            </div>
            <div className='d-flex justify-content-center align-items-center m-3'>
              {isValid ? (
                <Link to={'/'}>
                  <button type="submit" className="btn btn-secondary btn-lg">
                    Submit
                  </button>
                </Link>
              ) : (
                <button type="button" className="btn btn-secondary btn-lg" disabled>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login