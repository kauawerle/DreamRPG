import { IonCol, IonIcon, IonImg, IonRow, useIonRouter } from "@ionic/react";
import {  imagesOutline } from "ionicons/icons";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { ContentButton, InputImage, SendBox, SendImage } from "./styles";

const ContentButtonComponent: React.FC = () => {

	const { photos, takePhoto } = usePhotoGallery();

	const setImage = (_event: any) => {
		let f = _event.target.files![0];
		console.log(f);
	}

	return (
		<ContentButton >
			<SendBox>
				<SendImage onClick={() => takePhoto()}>
					<IonIcon style={{ fontSize: "80px" }} icon={imagesOutline} />
				</SendImage>
			</SendBox>
			<IonRow onClick={() => takePhoto()} style={{
				borderRadius: "20px"
			}}>
				{photos.map((photo, index) => (
					<IonCol style={{ width: "100px" }} size="14" key={index}>
						<IonImg src={photo.webviewPath} />
					</IonCol>
				))}
			</IonRow>
			<InputImage onChange={setImage} id={"file-upload"} style={{ display: "none" }} type="file" />
		</ContentButton>
	);
};

export default ContentButtonComponent;
