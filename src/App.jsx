import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminLogin from "./components/auth/AdminLogin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashborad from "./components/dashbord/Dashborad";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin/login" component={AdminLogin} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/artical/:currentPage?" component={Home} exact />
        <Route path="/artical/details/:slug" component={Home} exact />
        <Route path="/artical/category/:categorySlug/:currentPage?" component={Home} exact />
        <Route path="/artical/tag/:tagSlug/:currentPage?" component={Home} exact />
        <Route path="/artical/search/:searchValue" component={Home} exact />
        <Route path="/dashborad" component={Dashborad} exact />
        <Route path="/dashborad/all-artical/:currentPage?" component={Dashborad} exact />
        <Route path="/dashborad/artical-add/:currentPage?" component={Dashborad} exact />
        <Route path="/dashborad/all-category/:currentPage?" component={Dashborad} exact />
      </Switch>
    </Router>
  );
}

export default App;
