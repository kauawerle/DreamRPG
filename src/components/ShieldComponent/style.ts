import styled from 'styled-components';

import { IonIcon, IonImg, IonInput } from '@ionic/react';


export const ShieldBox = styled.div`
    --background: var(--ion-color-default-theme);
		--inner-border-width: 0;
    --inner-padding-end: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border: none;
		margin-bottom: 40px;
`;

export const Shield = styled(IonIcon)`
    width: 100%;
`;

export const Input = styled(IonInput)`
	width: 100%;
	height: 40px;
	font-size: 20px;

`;
