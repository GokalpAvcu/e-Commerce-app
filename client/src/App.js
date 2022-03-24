import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; // router-dom özelliği
import Navbar from './components/Navbar'; // navbar'ı import ettim



function App() {
  return (
    <Router>
    <div>
     <Navbar/> 
      <div id="content">

      
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      </div>
    </div>
  </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
