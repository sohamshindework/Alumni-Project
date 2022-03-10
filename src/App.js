import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./componants/Navbar/Navbar";
import FeedPage from "./componants/Feed/FeedPage";
import Home from "./componants/Home/Home";
import Footer from "./componants/Footer/Footer";
import LoginLogic from "./componants/Login/LoginLogic";
import Find from "./componants/FindAlumni/Find";
import Profile from "./componants/ProfilePage/Profile";


// import NavbarNew from "./componants/Navbar/NavbarNew";
//import User from "./componants/userprofile/User";
export default function App() {
  return (
    <Router>
      <>
        {/* <NavbarNew /> */}
        <Switch>
          <Route exact path="/login">
            <LoginLogic />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/feed">
            <Navbar />
            <FeedPage />
          </Route>
          <Route exact path="/findalumni">
            <Navbar />
            <Find />
          </Route>
          <Route exact path="/profile">
            <Navbar />

            <Profile />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
