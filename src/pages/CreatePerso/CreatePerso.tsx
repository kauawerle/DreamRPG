import { IonCol, IonIcon, IonImg, IonRow, IonSelectOption, useIonRouter } from '@ionic/react';
import { Container, InputGeneric, Logo, Select, SendBox } from '../../theme/global-styles';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import HeaderComponent from '../../components/header/Header';


import { InputImage, LogoBox, SendImage, Form } from './style';
import { imagesOutline } from 'ionicons/icons';

const CreatePerso: React.FC = () => {
	const router = useIonRouter();
	const { photos, takePhoto } = usePhotoGallery();

	const setImage = (_event: any) => {
		let f = _event.target.files![0];
		console.log(f);
	}

	return (
		<>
			<HeaderComponent />
			<Container style={{ marginTop: "50px" }}>
				<LogoBox>
					<Logo src={'assets/logo/Logo.png'} />
				</LogoBox>
				<SendBox>
					<SendImage onClick={() => takePhoto()}>
						<IonIcon style={{ fontSize: "80px" }} icon={imagesOutline} />
					</SendImage>
				</SendBox>
				<IonRow onClick={() => takePhoto()} style={{position: "absolute",
					width: "170.98px",
					height: "160.98px",
					left: "88.13px",
					top: "242px",
					borderRadius: "20px"
					}}>
					{photos.map((photo, index) => (
						<IonCol size="16" key={index}>
							<IonImg src={photo.webviewPath} />
						</IonCol>
					))}
				</IonRow>
				<InputImage onChange={setImage} id={"file-upload"} style={{ display: "none" }} type="file" />
				<Form>
					<Select style={{ fontSize: "20px", fontFamily: "Rajdhani" }} interface="popover" placeholder="Raça">
						<IonSelectOption value="Humano">Raça</IonSelectOption>
					</Select>
					<Select
						style={{
							fontSize: "20px",
							fontFamily: "Rajdhani",
							position: "absolute",
							height: "47.66px",
							top: "515.25px",

						}}
						interface="popover"
						placeholder="Classe">
						<IonSelectOption value="Humano">Humano</IonSelectOption>
					</Select>
					<InputGeneric placeholder="Armas" style={{ border: 'none' }}></InputGeneric>

				</Form>

			</Container>
		</>
	);
}

export default CreatePerso;
