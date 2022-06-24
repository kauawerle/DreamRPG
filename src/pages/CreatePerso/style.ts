
import { IonButton, IonItem } from '@ionic/react';
import styled from 'styled-components';


export const Header = styled.div`
	width: 100%;
	display: flex;
	height: 250px;
	background: var(--ion-color-default-theme);
`;


export const LogoBox = styled(IonItem)`
    --background: var(--ion-color-default-theme);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    border: none;
    margin: 84px 0;
    --inner-border-width: 0;
    --inner-padding-end: 0;
`;

export const InputImage = styled.input`
	position: absolute;
	width: 160.98px;
	height: 160.98px;
	left: 107.13px;
	top: 242px;

`;

export const Button = styled(IonButton)`
    --background: var(--ion-color-default-theme);
    --border-radius:4px;
    width:295px;
    height: 50px;

`;

export const SendImage = styled(IonButton)`
	--background: var(--ion-color-second-theme);
	--background-activated: var(--ion-color-default-theme, #423F4D);
	position: absolute;
	width: 160.98px;
	height: 160.98px;
	left: 120px;
	top: 242px;
	border-radius: 4px;
`;
