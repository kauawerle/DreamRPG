import { IonCol, IonIcon, IonImg, IonRow, useIonRouter } from "@ionic/react";
import {  imagesOutline } from "ionicons/icons";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { ContentButton, ContentImg, ImageCamera, InputImage, SendBox, SendImage } from "./styles";

const ContentButtonComponent: React.FC = () => {

	const { photos, takePhoto } = usePhotoGallery();



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
					<IonCol style={{ display: "flex",align: "center", justifyContent: "center", width: "100px", borderRadius: "20px" }} size="14" key={index}>
					<ContentImg>
						<ImageCamera style={{borderRadius: "20px"}} src={photo.webviewPath} />
					</ContentImg>
					</IonCol>
				))}
			</IonRow>
			<InputImage id={"file-upload"} style={{ display: "none", borderRadius: "20px" }} type="file" />
		</ContentButton>
	);
};

export default ContentButtonComponent;
