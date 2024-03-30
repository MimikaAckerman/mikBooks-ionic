import { IonInput } from '@ionic/react'
import React from 'react'

import "../../style/style.css"

const Login = () => {
  return (


<form className='form'>

<div className="title">Welcome,<br/><span>sign up to continue</span></div>
 

  <IonInput
      type="email"
      fill="solid"
      label="Email"
      labelPlacement="floating"
      helperText="Introduce tu email"
      errorText="Invalid email"
      className='input'
    ></IonInput>

<IonInput
      type="password"
      fill="solid"
      label="password"
      labelPlacement="floating"
      helperText="introduce tu contraseña"
      errorText="Invalid email"
      className='input'
    ></IonInput>
  

  <button className="button-confirm">Enter →</button>



</form>

  )
}

export default Login