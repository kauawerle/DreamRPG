import { Container, Logo } from '../../theme/global-styles';
import HeaderComponent from '../../components/header/Header';
import { LogoBox } from '../CreatePerso/style';


const ListPerso: React.FC = () => {
	return (
		<>
			<HeaderComponent/>
			
			<Container style={{ marginTop: "50px" }}>
				<LogoBox>
					<Logo src={'assets/logo/Logo.png'} />
				</LogoBox>
			</Container>

		</>
		)
}

export default ListPerso;
