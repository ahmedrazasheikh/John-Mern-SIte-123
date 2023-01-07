import './App.css';
import Home from './Components/Home';
import DashbordOrderAdmin from './Components/dashboard-vip-member'
import MembershipVip from './Components/membership-vip-member';
import OrderVipMember from './Components/Orders-vip-memeber'
import MyreviewAdmin from './Components/my-review-admin';
import Login from './Components/Login12';
import About from './Components/About';
import Contactuss from './Components/contactus';
import Tatsu from './Components/tatsu-landing-page';
import Collection from './Components/collection';
import Productdetail from './Components/product-detail'
import Subcription from './Components/subcription';
import Signup3 from './Components/Signup3';
import SignupForm from './Components/signupForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Components/Home.jsx';
// import SignupForm2 from './Components/SignupForm2';
// import LogInPage from './Components/Signup';
function App() {
  return (
    <div className="App">
      {/* <Signup3/> */}
      {/* <Login/> */}
{/* <LogInPage/> */}
      {/* <SignupForm/> */}
      {/* <Collection/> */}
    {/* <Productdetail/> */}
    {/* <Home/> */}
    {/* <Tatsu/> */}
    <MyreviewAdmin/>
    {/* <About/> */}
    {/* <Contactuss/> */}
    {/* <Login/> */}
    {/* <Subcrisption/> */}
    {/* <SignupForm2/> */}
    </div>
  );
}

export default App;
