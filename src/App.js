import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Header from "./Pages/Shared/Header/Header/Header";
import SignUp from "./Pages/SignUp/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Services from "./Pages/Services/Services/Services";
import BookService from "./Pages/BookService/BookService";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/services">
                        <Services items={7}></Services>
                    </Route>
                    <PrivateRoute path="/service/:id">
                        <BookService></BookService>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/sign-up">
                        <SignUp></SignUp>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    );
}

export default App;
