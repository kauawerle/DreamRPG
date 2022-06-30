import { IonSelectOption } from "@ionic/react";
import { Virtuoso } from "react-virtuoso";
import ContentButtonComponent from "../ContentButton/ContentButton";
import { Form, InputGeneric, Select, SelectBox } from "./style";

const FormComponent: React.FC = () => {
	return (
		<Virtuoso
			totalCount={1}
			overscan={200}
			style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: '60%', width: '100%', marginTop: '60px;' }}
			itemContent={(index) => {
				return (
					<>
						<Form>
						<ContentButtonComponent />

							<SelectBox style={{marginTop: '120px'}}>
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

							<InputGeneric placeholder="Armas" style={{height: '47px', border: 'none' }}></InputGeneric>
							<InputGeneric placeholder="descrição" style={{height: '90px', border: 'none' }}></InputGeneric>
							<InputGeneric placeholder="Poderes/Magias" style={{ height: '90px', border: 'none' }}></InputGeneric>
							<InputGeneric placeholder="Pontos de vida" style={{ height: '90px', border: 'none' }}></InputGeneric>
						</Form>

					</>
				);
			}}
		/>

	);
};

export default FormComponent;
