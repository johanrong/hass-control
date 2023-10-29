import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonItemGroup, IonList, IonPage, IonRange, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Overview.css';

function createLightCard(title: string, subtitle: string) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonGrid>
          <IonItem>
            <IonCardTitle>{title}</IonCardTitle>
            <span style={{margin: "0em 1em 0em 0em"}}></span>
            <IonToggle enableOnOffLabels={true} checked={false /*integrate with home assistant*/}></IonToggle>
          </IonItem>
        </IonGrid>
        <IonChip outline={true} disabled={true}>{subtitle}</IonChip>
        <IonItem>
          <IonRange aria-label="Brightness" pin={true} pinFormatter={(value: number) => `${value}%`} value={0 /*integrate with home assistant*/}></IonRange>
        </IonItem>
      </IonCardHeader>
    </IonCard>
  );
}

const Overview: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>Overview</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="4">{createLightCard("Tak", "Johan")}</IonCol>
            <IonCol size="4">{createLightCard("Bord", "Johan")}</IonCol>
            <IonCol size="4">{createLightCard("Lampe", "Johan")}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Overview;
