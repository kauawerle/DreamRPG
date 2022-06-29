import { IonInfiniteScrollContent } from '@ionic/react';
import { Container} from '../../theme/global-styles';

import LogoComponent from '../../components/LogoBox/LogoBox';
import ContentButtonComponent from '../../components/ContentButton/ContentButton';
import HeaderComponent from '../../components/header/Header';
import FormComponent from '../../components/FormComponent/FormComponent';

const CreatePerso: React.FC = () => (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: "50px" }}>
				<LogoComponent />
				<ContentButtonComponent />
				<FormComponent />
			</Container>
		</>
	)


export default CreatePerso;
