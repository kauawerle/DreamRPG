import { Container, Logo, SendImage } from '../../theme/global-styles';
import { LogoBox  } from './style';

const CreatePerso: React.FC = () => {
	return (
		<Container>
		 <LogoBox>
      <Logo src={'assets/logo/Logo.png'} />      
    </LogoBox>	

		<input type="file"/>
		</Container>
	);
} 

export default CreatePerso;
