import { Button, Container, Logo, LogoBox, Text, } from './style';
import { Redirect, Route } from 'react-router-dom';
import { useIonRouter } from '@ionic/react';

const Start: React.FC = () => {
  const router = useIonRouter();

  const handleNavigateHome = () => {
    router.push('/home', 'forward', 'push')
  }

  return (
    <Container>
      <LogoBox>
        <Logo src={'assets/logo/logo.png'} />
      </LogoBox>
      <Text>Aplicativo gratuito para criar sua ficha de rpg</Text>

      <Button onClick={() => handleNavigateHome()}>

        <Text>Começar</Text>
      </Button>
    </Container>
  );
};

export default Start;
