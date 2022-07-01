import { IonButton, IonImg } from "@ionic/react";
import styled from "styled-components";


export const ContentButton = styled.div`
display: flex;
margin-top: 50px;
`;

export const SendBox = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
    width: 100%;
    border: none;
    --inner-border-width: 0;
    --inner-padding: 0;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`

export const SendImage = styled(IonButton)`
	--background: var(--ion-color-second-theme);
	--background-activated: var(--ion-color-default-theme, #423F4D);
	position: absolute;
	width: 160.98px;
	height: 160.98px;
	margin-top: 20px;
	border-radius: 4px;
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

`;

export const InputImage = styled.input`
	width: 160.98px;
	height: 160.98px;

`;

export const ImageCamera = styled(IonImg)`
	position: absolute;
	width: 180px;
	height: 180px ;
	top: 0;
	margin-top: -80px;
`;

export const ContentImg = styled.div`
	width:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	
	
`;
