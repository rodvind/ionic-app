import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonCheckbox, 
  IonNote, 
  IonBadge, 
  IonFab, 
  IonFabButton 
} from '@ionic/react';
import { add } from 'ionicons/icons'
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled(IonTitle)`
  color: red;
`
// const openMenu = () => document.querySelector('Ion-Menu-Controller').open()

const Home = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <StyledHeader>Home</StyledHeader>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create an Idea</h1>
              <IonNote>Run Idea by Rodvin</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/expenses')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
