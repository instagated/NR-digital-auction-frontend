import "./App.css";
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import Home from "./App/Screens/Home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./App/Screens/Authentication/SignUp";
import SignIn from "./App/Screens/Authentication/SignIn";
import AuctionDetails from "./App/Screens/ActionDetails/AuctionDetails";
import ThemeLayout from "./App/Components/ThemeLayout";
import CreateAuction from "./App/Screens/CreateAuction/CreateAuction";
import CreateSuccess from "./App/Screens/CreateAuction/CreateSuccess";
import MyBiddings from "./App/Screens/MyBiddings/MyBiddings";
import Category from "./App/Screens/Category/Category";
import Profile from "./App/Screens/Profile/Profile";
import LandingPage from "./App/Screens/LandingPage";
import Settings from "./App/Screens/Settings/Settings"

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#01172d",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#5ABFC0",
    },
  },
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home/:id/" component={ThemeLayout(Home)} />
            <Route exact path="/service-signup" component={ThemeLayout(SignUp,2)} />

            
            
            <Route exact path="/detail/:id" component={ThemeLayout(AuctionDetails)} />
            <Route exact path="/signup" component={ThemeLayout(SignUp,2)} />
            <Route exact path="/login" component={ThemeLayout(SignIn,2)} />
            <Route exact path="/:id/createauction" component={ThemeLayout(CreateAuction)} />
            <Route exact path="/createsuccess" component={ThemeLayout(CreateSuccess)} />
            <Route exact path="/myBiddings" component={ThemeLayout(MyBiddings)} />
            <Route exact path="/category" component={ThemeLayout(Category)} />
            <Route exact path="/profile" component={ThemeLayout(Profile)} />
            <Route exact path="/settings" component={ThemeLayout(Settings)} />

            {/* <Route exact path="/profile" component={Profile} />
            <Route exact path="/myinvestments" component={MyInvestments} />
            <Route exact path="/create" component={Create} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
