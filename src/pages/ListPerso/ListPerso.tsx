import { Container, Logo } from "../../theme/global-styles";
import HeaderComponent from "../../components/header/Header";
import { LogoBox } from "../CreatePerso/style";
import { DivPerson, PhotoPerson, DivText, Title, SubTitle } from "./style";

const ListPerso: React.FC = () => {
	return (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: "50px" }}>
				<LogoBox>
					<Logo src={"assets/logo/Logo.png"} />
				</LogoBox>
				<DivPerson>
					<PhotoPerson></PhotoPerson>
					<DivText>
						<Title>nada</Title>
						<SubTitle>nada</SubTitle>
						<SubTitle>nada</SubTitle>
					</DivText>
				</DivPerson>
			</Container>
		</>
	);
};

export default ListPerso;
