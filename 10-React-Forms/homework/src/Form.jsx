import React from 'react';

export default function  Form() {
const [input, setInput] = React.useState({
  username: '',
  password: '',
});

const [errors, setErrors] = React.useState({});

function handleInputChange(e) {
  const {name, value} = e.target;
  setInput({...input, [name]: value})

  setErrors(validate({...input, [name]: value}));
};


  return (
    <form>
    <div>
      <label>Username:</label>
      <input 
      type="text" 
      name="username" 
      value={input.username}
      onChange={handleInputChange}
      className={errors.username ? "danger" : ""} 
      />
      {errors.username && <span>{errors.username}</span>}
    </div>
    <div>
      <label>Password:</label>
      <input 
      type="password" 
      name="password" 
      value={input.password}
      onChange={handleInputChange} 
      className={errors.password ? "danger" : ""} 
      />
         {errors.password && <span>{errors.password}</span>}
    </div>
    
  </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  

  return errors;
};
