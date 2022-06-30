import { Container } from '../../theme/global-styles';
import { Virtuoso } from 'react-virtuoso';
import LogoComponent from '../../components/LogoBox/LogoBox';
import ContentButtonComponent from '../../components/ContentButton/ContentButton';
import HeaderComponent from '../../components/header/Header';
import FormComponent from '../../components/FormComponent/FormComponent';
import { IonContent } from '@ionic/react';

const CreatePerso: React.FC = () => (
	<>
		<HeaderComponent />
		<Container style={{marginTop: '50px'}} >
		<LogoComponent />
		<FormComponent />
		</Container>
	</>
)


export default CreatePerso;
