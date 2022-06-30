import { IonIcon, IonImg } from "@ionic/react";
import { Logo, LogoBox } from "../LogoBox/styles";
import shield from './aaa.svg'
import { CalcBox, Container, InputSkill } from "./style";

const SkillComponent: React.FC = () => {
	
	return (
		<Container style={{marginTop:"50px"}}>
			<InputSkill placeholder="Força" type="number"></InputSkill>
			<InputSkill placeholder="Destreza" type="number"></InputSkill>
			<InputSkill placeholder="Constituição" type="number"></InputSkill>
			<InputSkill placeholder="Inteligência" type="number"></InputSkill>
			<InputSkill placeholder="Sabedoria" type="number"></InputSkill>
			<InputSkill placeholder="Carisma" type="number"></InputSkill>
		</Container>
	);
};

export default SkillComponent;
