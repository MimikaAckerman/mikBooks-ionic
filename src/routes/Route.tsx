import React from 'react'


import Login from '../components/login/Login'
import Register from '../components/register/Register'
import { IonReactRouter } from '@ionic/react-router'
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'



import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';

const Routes = () => {
  return (
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        {/*
        Use the render method to reduce the number of renders your component will have due to a route change.

        Use the component prop when your component depends on the RouterComponentProps passed in automatically.
      */}
        <Route path="/login" render={() => <Login />} exact={true} />
        <Route path="/register" render={() => <Register />} exact={true} />
        
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="login" href="/login">
          <IonIcon icon={playCircle} />
          <IonLabel>login</IonLabel>
        </IonTabButton>

        <IonTabButton tab="register" href="/register">
          <IonIcon icon={radio} />
          <IonLabel>Register</IonLabel>
        </IonTabButton>

       
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  )
}

export default Routes