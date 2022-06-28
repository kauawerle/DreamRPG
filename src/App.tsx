import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { SplashScreen } from '@capacitor/splash-screen';
import Start from './pages/Start/Start';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/Home';
import CreatePerso from './pages/CreatePerso/CreatePerso';
import ListPerso from './pages/ListPerso/ListPerso';

setupIonicReact();

const App: React.FC = () => {
	SplashScreen.show({
		showDuration: 2000,
		autoHide: true
	});

	return (
		<IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
				<Route exact path="/create">
          <CreatePerso/>
        </Route>
				<Route exact path="/list">
          <ListPerso/>
        </Route>
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
	)
  
};

export default App;
