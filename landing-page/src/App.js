import './App.css';
import Header from './Components/Header/Header';
import Payments from './Components/Payments/Payments';
import Store from './Components/Store/Store';
import payment from "./Images/payment.png"
import pay from "./Images/pay.png"
import Contact from './Components/Contact/Contact';
import TrackOrders from './Components/TrackOrders/TrackOrders';
import ttt from "./Images/ttt.png"

function App() {
  return (
    <div className="App">
      <Header />
      <Store />
      <Payments image={payment} title='How does tracking payments work?' button='How'/>
      <Payments image={pay} title='Easily track your payments.' button='Track'/>
      <TrackOrders image={ttt}/>
      <Contact/>
    </div>
  );
}

export default App;
