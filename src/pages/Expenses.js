import { 
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
 } from '@ionic/react'
 import React from 'react';

 const Expenses = () => {
   return (
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonButtons slot="start">
             <IonBackButton defaultHref="/home" />
           </IonButtons>
           <IonTitle>Expenses</IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent></IonContent>
     </IonPage>
   )
 }

 export default Expenses