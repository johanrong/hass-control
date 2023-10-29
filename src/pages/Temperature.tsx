import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Temperature.css';

const Temperature: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Temperature</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Temperature</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Temperature page" />
      </IonContent>
    </IonPage>
  );
};

export default Temperature;
