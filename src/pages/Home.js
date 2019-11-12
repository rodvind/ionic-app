import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonGrid,
  IonRow,
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonRouterOutlet,
  IonIcon, 
  IonLabel, 
  IonCheckbox, 
  IonNote, 
  IonBadge, 
  IonFab, 
  IonFabButton, 
  IonMenu,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import { add } from 'ionicons/icons'
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled(IonTitle)`
  color: red;
`
// const openMenu = () => document.querySelector('Ion-Menu-Controller').open()

// IonMenuButton

const Home = () => {
   return(
   <>
      <IonHeader>
         <IonToolbar color="primary">
            <IonMenuButton slot="start" color="secondary" />
            <IonTitle>Dashboard</IonTitle>
         </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" slot="fixed">
         <IonGrid slot="fixed">
            <IonRow>
               <IonList></IonList>
            </IonRow>
         </IonGrid>
      </IonContent>
   </>
      )
   }
// const Home = props => {
//   const openMenu = () => console.log('It clicked')
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <StyledHeader>Home</StyledHeader>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <IonList>
//           <IonItem>
//             <IonCheckbox slot="start" />
//             <IonLabel>
//               <h1>Create an Idea</h1>
//               <IonNote>Run Idea by Rodvin</IonNote>
//             </IonLabel>
//             <IonBadge color="success" slot="end">
//               5 Days
//             </IonBadge>
//           </IonItem>
//         </IonList>
//         <IonFab vertical="bottom" horizontal="end" slot="fixed">
//           <IonFabButton onClick={() => props.history.push('/expenses')}>
//             <IonIcon icon={add} />
//           </IonFabButton>
//         </IonFab>
//       </IonContent>
//     </IonPage>
//   );
// };

export default Home;
