import { Container } from '../../theme/global-styles';
import LogoComponent from '../../components/LogoBox/LogoBox';
import HeaderComponent from '../../components/header/Header';
import FormComponent from '../../components/FormComponent/FormComponent';
import { Button, ContentButton } from './style';
import { IonIcon, useIonRouter } from '@ionic/react';
import { arrowDown, arrowForwardCircle } from 'ionicons/icons';

const CreatePerso2: React.FC = () => {
	const router = useIonRouter();

	const handleNavigateHome = () => {
		router.push('/home', 'forward', 'push')
	}

	return (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: '50px' }} >
				<LogoComponent />
				
			</Container>

		</>
	)
}


export default CreatePerso2;
