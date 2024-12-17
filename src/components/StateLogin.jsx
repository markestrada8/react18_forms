import { useState } from 'react'
import Input from './Input'
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'
import { useInput } from '../hooks/useInput'

export default function Login() {
  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    didEdit: didEditEmail
  } = useInput('')


  const {
    value: passwordValue,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    didEdit: didEditPassword
  } = useInput('')


  const emailIsInvalid = didEditEmail && !isEmail(emailValue) && !isNotEmpty(emailValue)
  const passwordIsInvalid = didEditPassword && !hasMinLength(passwordValue, 6)

  function handleSubmit(e) {
    e.preventDefault()

    setUserData({
      email: '',
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">

        <Input
          type="email"
          id="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          errorValue={emailIsInvalid}
          errorMessage="Please enter a valid email."
        >
          Email
        </Input>

        <Input
          type="password"
          name="password"
          id="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          errorValue={passwordIsInvalid}
          errorMessage="Please enter a valid password."
        >
          Password
        </Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  )
}

//************************************************************
// import { useState } from 'react'
// import Input from './Input'
// import { isEmail, isNotEmpty, isEqualsToOtherValue, hasMinLength } from '../util/validation'

// export default function Login() {


//   const [userData, setUserData] = useState({
//     email: '',
//     password: ''
//   })
//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false
//   })

//   const emailIsInvalid = didEdit.email && !isEmail(userData.email) && !isNotEmpty(userData.email)
//   const passwordIsInvalid = didEdit.password && !hasMinLength(userData.password, 6)

//   function handleChange(e) {
//     console.log(`user data: ${userData} name |${e.target.name}| value |${e.target.value}|`)
//     const { name, value } = e.target
//     setUserData(prevState => {
//       return {
//         ...prevState,
//         [name]: value
//       }
//     })
//     setDidEdit(prevState => {
//       return {
//         ...prevState,
//         [name]: true
//       }
//     })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()

//     // console.log(userData)

//     setUserData({
//       email: '',
//       password: ''
//     })
//   }

//   function handleInputBlur(event) {
//     const { name, value } = event.target
//     setDidEdit(prevState => {
//       return {
//         ...prevState,
//         [name]: true
//       }
//     })
//   }
//   // console.log(didEdit)

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">

//         <Input
//           type="email"
//           id="email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//           onBlur={handleInputBlur}
//           errorValue={emailIsInvalid}
//           errorMessage="Please enter a valid email."
//         >
//           Email
//         </Input>

//         <Input
//           type="password"
//           name="password"
//           id="password"
//           value={userData.password}
//           onChange={handleChange}
//           onBlur={handleInputBlur}
//           errorValue={passwordIsInvalid}
//           errorMessage="Please enter a valid password."
//         >
//           Password
//         </Input>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button" >Login</button>
//       </p>
//     </form>
//   )
// }

//************************************************************
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// function handleEmailChange(e) {
//   setEmail(e.target.value)
// }

// function handlePasswordChange(e) {
//   setPassword(e.target.value)
// }

/* <form onSubmit={handleSubmit}>
<h2>Login</h2>

<div className="control-row">
  <div className="control no-margin">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      onBlur={handleInputBlur}
      value={userData.email}
      onChange={handleChange}
    />
    <div className="control-error">
      {emailIsInvalid && <p>Please enter a valid email.</p>}
    </div>
  </div>

  <div className="control no-margin">
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      onBlur={handleInputBlur}
      value={userData.password}
      onChange={handleChange}
    />

  </div>
</div>

<p className="form-actions">
  <button className="button button-flat">Reset</button>
  <button className="button" >Login</button>
  <button className="button" onClick={handleSubmit} >Login</button>
  <button className="button" type='button'>Login</button>
</p>
</form> */