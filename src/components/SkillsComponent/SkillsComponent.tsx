import ShieldComponent from "../ShieldComponent/Shield";
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
			<ShieldComponent/>
		</Container>
	);
};

export default SkillComponent;
