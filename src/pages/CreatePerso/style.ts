
import { IonButton, IonItem } from '@ionic/react';
import styled from 'styled-components';


export const Header = styled.div`
	width: 100%;
	display: flex;
	height: 250px;
	background: var(--ion-color-default-theme);
`;


export const LogoBox = styled.div`
    --background: var(--ion-color-default-theme);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 30%;
    border: none;
    margin: 84px 0;
    --inner-border-width: 0;
    --inner-padding-end: 0;
`;


export const Button = styled(IonButton)`
    --background: var(--ion-color-default-theme);
    --border-radius:4px;
    width:295px;
    height: 50px;

`;




export const Form = styled.div`
	width:100%;
	display: flex;
	justify-content: center;
	align-items: center;
`; 

export const ContentButton = styled.div`
	display: flex;
	margin-top: 50px;
`;


