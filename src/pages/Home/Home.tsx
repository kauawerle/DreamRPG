import { IonText, useIonRouter } from '@ionic/react';
import { Button, Container, Logo, LogoBox, Text } from './style';

const Home: React.FC = () => {
  const router = useIonRouter();


  const handleNavigateListPerso = () => {
    router.push('/list', 'forward', 'push')
  }

	const handleNavigateCreate = () => {
    router.push('/create', 'forward', 'push')
  }

  return (
    <Container> 
    <LogoBox>
      <Logo src={'assets/logo/Logo.png'} />      
    </LogoBox>
    
    <Button onClick={() => {handleNavigateListPerso()}}>
      <Text>Personagens</Text>
    </Button>
    <Button onClick={() => {handleNavigateCreate()}}>
      <Text>Criar Personagem</Text>
    </Button>
  </Container>
  );
};

export default Home;
