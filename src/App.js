import { Route, Switch } from "react-router-dom";
import BookAppointment from "./Appointment/BookAppointment";
import ListAppointment from "./Appointment/ListAppointment";
import About from "./component/About/About";
import Contact from "./component/Contact";
import Deparment from "./component/Deparment/Deparment";
import Doctors from "./component/Doctors/Doctors";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header";
import Auth from "./Container/Auth/Auth";
import Home from "./Container/Home";
import Privateroute from "./route/Privateroute";
import Publicroute from "./route/Publicroute";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Publicroute exact path={"/"}component={Home}/>
      <Publicroute exact path={"/deparmaent"}component={Deparment}/>
      <Publicroute exact path={"/doctors"}component={Doctors}/>
      <Privateroute exact path={"/about"}component={About}/>
      <Privateroute exact path={"/contact"}component={Contact}/>
      <Publicroute restricted={true} exact path={"/danger"}component={Auth}/>
      <Publicroute exact path={"/bookappointment"} component={BookAppointment}/>
      <Publicroute exact path={"/listappointment"} component={ListAppointment}/>


    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;
