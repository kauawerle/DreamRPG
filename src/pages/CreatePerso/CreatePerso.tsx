import { IonIcon, useIonRouter } from '@ionic/react';
import { Container, Logo, SendBox } from '../../theme/global-styles';
import { Button, Header, InputImage, LogoBox, SendImage } from './style';
import { imagesOutline, arrowBack } from 'ionicons/icons';
import HeaderComponent from '../../components/header/Header';

const CreatePerso: React.FC = () => {
	const router = useIonRouter();


	const openInputFile = () => {
		(document as any).getElementById("file-upload").click();
	}

	const setImage = (_event: any) => {
		let f = _event.target.files![0];
		console.log(f);
		(document as any).getElementById("ImageBox").appendChild("<h1> hello</h1>");
	}

	return (
		<>
			<HeaderComponent/>
			<Container style={{marginTop: "50px"}}>
				<LogoBox>
					<Logo src={'assets/logo/Logo.png'} />
				</LogoBox>
				<SendBox>
					<SendImage onClick={() => openInputFile()}>
						<IonIcon style={{ fontSize: "80px" }} icon={imagesOutline} />
					</SendImage>
				</SendBox>
				<InputImage onChange={setImage} id={"file-upload"} style={{ display: "none" }} type="file" />
			</Container>
		</>
	);
}

export default CreatePerso;
