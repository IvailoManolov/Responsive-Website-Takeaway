import './App.css';
import Header from './Components/Header/Header';
import Payments from './Components/Payments/Payments';
import Store from './Components/Store/Store';
import payment from "./Images/payment.png"
import pay from "./Images/pay.png"


function App() {
  return (
    <div className="App">
      <Header />
      <Store />
      <Payments image={payment} title='Easily track your payments.' button='How'/>
      <Payments image={pay} title='Easily track your payments.' button='Track'/>
    </div>
  );
}

export default App;
