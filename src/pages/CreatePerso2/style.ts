
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


export const Button = styled.button`
	margin-top: 10px;
    background: var(--ion-color-default-theme);
    width:20%;
    height: 50px;
		box-shadow: none !important;
		border: none;
`;



export const Form = styled.div`
	width:100%;
	display: flex;
	justify-content: center;
	align-items: center;
`; 

export const ContentButton = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;


