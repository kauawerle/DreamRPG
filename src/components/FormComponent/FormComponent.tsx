import { IonSelectOption } from "@ionic/react";
import { Form, InputGeneric, Select, SelectBox } from "./style";

const FormComponent: React.FC = () => {
	return (
		<Form>
			<SelectBox>
				<Select style={{ fontSize: "20px", fontFamily: "Rajdhani" }} interface="popover" placeholder="Raça">
					<IonSelectOption value="Humano">Raça</IonSelectOption>
				</Select>
				<Select
					style={{
						fontSize: "20px",
						fontFamily: "Rajdhani",
					}}
					interface="popover"
					placeholder="Classe">
					<IonSelectOption value="Humano">Humano</IonSelectOption>
				</Select>
			</SelectBox>
			<InputGeneric placeholder="Armas" style={{ border: 'none' }}></InputGeneric>
			<InputGeneric placeholder="Armas" style={{ border: 'none' }}></InputGeneric>
		</Form>
	);
};

export default FormComponent;
