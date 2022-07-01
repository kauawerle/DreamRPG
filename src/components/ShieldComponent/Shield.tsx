import { IonIcon, IonImg } from "@ionic/react";
import { Logo, LogoBox } from "../LogoBox/styles";
import { Input, Shield, ShieldBox, ShieldContent } from "./style";
import shield from './aaa.svg'

const ShieldComponent: React.FC = () => {

	return (
		<ShieldBox style={{ width: "100%" }}>
			<ShieldContent>
				<Input placeholder="teste">
				<IonImg style={{ fontSize: "35px" }} src={shield} />

				</Input>
			</ShieldContent>


			<Input placeholder="teste">

			</Input>
			<Input placeholder="teste">

			</Input>

		</ShieldBox>
	);
};

export default ShieldComponent;
