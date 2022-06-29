import { IonSelectOption, IonInfiniteScrollContent } from '@ionic/react';
import { Container, InputGeneric, Select } from '../../theme/global-styles';

import HeaderComponent from '../../components/header/Header';


import { Form } from './style';
import LogoComponent from '../../components/LogoBox/LogoBox';
import ContentButtonComponent from '../../components/ContentButton/ContentButton';

const CreatePerso: React.FC = () => {

	return (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: "50px" }}>
				<LogoComponent />
				<ContentButtonComponent />
				<Form>
					<Select style={{ fontSize: "20px", fontFamily: "Rajdhani" }} interface="popover" placeholder="Raça">
						<IonSelectOption value="Humano">Raça</IonSelectOption>
					</Select>
					<Select
						style={{
							fontSize: "20px",
							fontFamily: "Rajdhani",
						}}
						interface="popover"
						placeholder="Classe">
						<IonSelectOption value="Humano">Humano</IonSelectOption>
					</Select>
					<InputGeneric placeholder="Armas" style={{ border: 'none' }}></InputGeneric>
					<InputGeneric placeholder="Armas" style={{ border: 'none' }}></InputGeneric>
				</Form>
			</Container>
		</>
	)
}

export default CreatePerso;
