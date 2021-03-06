import { Container } from '../../theme/global-styles';
import LogoComponent from '../../components/LogoBox/LogoBox';
import HeaderComponent from '../../components/header/Header';
import FormComponent from '../../components/FormComponent/FormComponent';
import { Button, ContentButton } from './style';
import { IonIcon, useIonRouter } from '@ionic/react';
import { arrowDown, arrowForwardCircle } from 'ionicons/icons';

const CreatePerso: React.FC = () => {
	const router = useIonRouter();

	const handleNavigateHome = () => {
		router.push('/create2', 'forward', 'replace')
	}

	return (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: '50px' }} >
				<LogoComponent />
				<FormComponent />
				<ContentButton>
					<Button onClick={() => { handleNavigateHome() }}>
						<IonIcon style={{ fontSize: "35px" }} icon={arrowForwardCircle} />
					</Button>
				</ContentButton>
			</Container>

		</>
	)
}


export default CreatePerso;
