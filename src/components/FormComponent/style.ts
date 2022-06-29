import { IonSelect } from "@ionic/react";
import styled from "styled-components";

export const Form = styled.div`
	margin-top: 80px;
	width:100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`; 

export const SelectBox = styled.div`
	margin-top: 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

`;

export const Select = styled(IonSelect)`
	width: 60%;
	margin-top: 20px;
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	background: #423F4D;
`;

export const InputGeneric = styled.input`
	width: 60%;
	height: 40px;
	margin-top: 20px;
	background: #423F4D;
	outline: 0;
	font-size: 20px;
	font-family: 'Rajdhani';
	text-align: center;
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
`;
