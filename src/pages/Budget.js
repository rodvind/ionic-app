import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react'

const Budjet = (params) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
             <IonBackButton defaultHref="/home" />
           </IonButtons>
        <IonTitle>Budget</IonTitle>
      </IonToolbar>
    </IonHeader>
  </IonPage>
)

export default Budjet