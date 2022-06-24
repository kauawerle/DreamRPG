import { IonIcon, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Container } from "../../theme/global-styles";
import { Button, Header } from "./style";

const HeaderComponent: React.FC = () => {
	const router = useIonRouter();

	const handleNavigateHome = () => {
		router.push('/home', 'forward', 'push')
	}

	return (
		<Header>
			<Button onClick={() => {handleNavigateHome()}}>
				<IonIcon style={{ fontSize: "35px" }} icon={arrowBack} />
			</Button>
		</Header>
	);
};

export default HeaderComponent;
