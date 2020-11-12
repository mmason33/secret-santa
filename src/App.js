import logo from './logo.svg';
import './App.css';
import UserProvider from './providers/UserProvider';
import Application from './components/Application/Appication';

function App() {
	return (
		<UserProvider>
			<Application/>
		</UserProvider>
  	);
}

export default App;
