import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/navbar';
import CardTitle from './Components/CardTitle/cardtitle';
import SideBar from './Components/SideBar/sidebar'


function App() {
  return (
    <div className="App container-fluid ntr d-flex">
        <NavBar/>
        <SideBar/>
        <CardTitle/>
        
    </div>
  );
}

export default App;
