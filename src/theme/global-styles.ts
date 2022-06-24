import { IonPage, IonText, IonImg, IonContent, IonItem, IonButton, IonInput } from '@ionic/react';
import styled from 'styled-components';

export const Container = styled(IonPage)`
    background: #312E38;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;

`;

export const LogoBox = styled.div`
    --background: var(--ion-color-default-theme);
		--inner-border-width: 0;
    --inner-padding-end: 0;
		top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border: none;
`;

export const Logo = styled(IonImg)`
    width: 100%;
`;

export const SendBox = styled.div`
    --background: var(--ion-color-default-theme);
	
		display: flex;
		justify-content: center;
		align-items: center;
    width: 100%;
    border: none;
    --inner-border-width: 0;
    --inner-padding: 0;

`
