import { IonImg } from '@ionic/react';
import styled from 'styled-components';


export const LogoBox = styled.div`
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

export const Logo = styled(IonImg)`
    width: 100%;
`;
