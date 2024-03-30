import React from 'react';
import { IonAvatar,IonButton } from '@ionic/react';

function Perfil() {
  return (
    
    <>
    <IonAvatar>
        <img alt="Silhouette of a person's head" 
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
         />
      </IonAvatar>
      <IonButton expand="block">My list</IonButton>
      <IonButton expand="block">Settings</IonButton>
      <IonButton expand="block">Delete My count</IonButton>

    </>
    
      

   
  );
}
export default Perfil;