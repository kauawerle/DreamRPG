import { IonIcon, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Container } from "../../theme/global-styles";
import { Logo, LogoBox } from "./styles";

const LogoComponent: React.FC = () => {
	const router = useIonRouter();

	const handleNavigateHome = () => {
		router.push('/home', 'forward', 'push')
	}

	return (
		<LogoBox style={{width: "30%"}}>
			<Logo src={'assets/logo/Logo.png'} />
		</LogoBox>
	);
};

export default LogoComponent;
