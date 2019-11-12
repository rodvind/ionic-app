import React from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonRouterOutlet, IonPage, IonMenuButton, IonMenuToggle } from '@ionic/react'
import {
  Redirect,
  Route
} from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router'
import { home, person, chatbubbles, settings, wallet, pricetags } from 'ionicons/icons'
import styled from 'styled-components';

import Home from './Home'
import Budget from './Budget'
import Expenses from './Expenses';

const StyledHeader = styled(IonTitle)`
  color: red;
`
const Menu = () => (
   <> 
    <IonMenu side="start" contentId="main-content" type="overlay">
      <IonHeader>
        <IonToolbar>
          <StyledHeader>Menu</StyledHeader>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/home">
              <IonIcon icon={home} slot="start"></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/budget">
              <IonIcon icon={wallet} slot="start"></IonIcon>
              <IonLabel>Budget</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/expenses">
              <IonIcon icon={pricetags} slot="start"></IonIcon>
              <IonLabel>Expenses</IonLabel>
           </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem>
              <IonIcon icon={settings} slot="start"></IonIcon>
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
          
        </IonList>
      </IonContent>
    </IonMenu>

        <IonPage id="main-content">
           <IonReactRouter>
              <IonRouterOutlet>
                 <Route path="/home" component={Home} exact={true} />
                 <Route path="/budget" component={Budget} />
                 <Route path="/expenses" component={Expenses} />
                 <Route exact path="/" render={() => <Redirect to="/home" />} />
              </IonRouterOutlet>
           </IonReactRouter>
        </IonPage>
    </>
  // <IonPage>
  //   <IonMenu side="start" menuId="first">
  //     <IonHeader>
  //       <IonToolbar color="primary">
  //         <IonTitle>Start Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>

  //   <IonMenu side="start" menuId="custom" class="my-custom-menu">
  //     <IonHeader>
  //       <IonToolbar color="tertiary">
  //         <IonTitle>Custom Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>

  //   <IonMenu side="end" type="push">
  //     <IonHeader>
  //       <IonToolbar color="danger">
  //         <IonTitle>End Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>
  //   <IonRouterOutlet></IonRouterOutlet>
  // </IonPage>
)


// Note:
// IonMenuToggle is responsible for closing menu
// once clicking on a menu item

export default Menu