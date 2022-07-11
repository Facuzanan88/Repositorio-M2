import React from 'react';

export default function Form() {
  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  function handleDataChange(e) {
    const newData = {...data, [e.target.name]: e.target.value};
    setData(newData);
    setErrors(validate(newData));
  }


  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleDataChange}
          className={errors.username ? "danger" : ""} />
          {errors.username && <span className="danger">{errors.username}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleDataChange}
          className={errors.password ? "danger" : ""} />
          {errors.password && <span className="danger">{errors.password}</span>}
      </div>
    </form>
  )
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
}
// METODO CLASS
// 
// // export default Class Form extends React.Component {
//   constructor(props) {
//   super(props);
// this.state = {
// data: {
// username:'',
// password:'',
//},
// errors:{},
//}
//}
// 
// handleOnChange = (e) => {
//  const {name, value} = e.target;
// const newData = {...this.state.data, [name]: value}
//
// this.setState({
//  data: newData,
//  errors: validate (newData),
//});
//}
//
//
//    render() {
//  //  return (
 //    <form>
 //      <div>
//         <label>Username:</label>
//        <input
// //         type="text"
//          name="username"
//          value={this.state.data.username}
//          onChange={this.handleDataChange}
//          className={this.state.errors.username ? "danger" : ""} />
//          {this.state.errors.username && <span className="danger">{this.state.errors.username}</span>}
//      </div>
//      <div>
//        <label>Password:</label>
// //       <input
//          type="password"
//          name="password"
//          value={this.state.data.password}
//          onChange={this.handleDataChange}
//          className={this.state.errors.password ? "danger" : ""} />
//          {this.state.errors.password && <span className="danger">{this.state.errors.password}</span>}
//      </div>
//    </form>
//  )
//  }
// }
// 
// export function validate(input) {
//   let errors = {};
//   if (!input.username) {
//     errors.username = 'Username is required';
//   } else if (!/\S+@\S+\.\S+/.test(input.username)) {
//  //    errors.username = 'Username is invalid';
//   }
//   if (!input.password) {
//     errors.password = 'Password is required';
//   } else if (!/(?=.*[0-9])/.test(input.password)) {
//     errors.password = 'Password is invalid';
//   }
//   
//   return errors;
// }
