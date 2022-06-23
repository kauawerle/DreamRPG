import { IonPage, IonText, IonImg, IonContent, IonItem, IonButton } from '@ionic/react';
import styled from 'styled-components';

export const Container = styled(IonPage)`
    background: #312E38;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;

`;

export const LogoBox = styled(IonItem)`
    --background: var(--ion-color-default-theme);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border: none;
    margin: 84px 0;
    --inner-border-width: 0;
    --inner-padding-end: 0;
`;

export const Logo = styled(IonImg)`
    width: 100%;
`;
