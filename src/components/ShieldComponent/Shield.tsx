import { IonIcon, IonImg } from "@ionic/react";
import { Logo, LogoBox } from "../LogoBox/styles";
import { Input, Shield, ShieldBox } from "./style";
import shield from './aaa.svg'

const ShieldComponent: React.FC = () => {
	
	return (
		<ShieldBox style={{width: "100%"}}>
		
			<IonImg style={{ fontSize: "35px" }} src={shield} >
				<Input></Input>
			</IonImg>

			
		</ShieldBox>
	);
};

export default ShieldComponent;
