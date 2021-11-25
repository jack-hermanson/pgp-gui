import { FunctionComponent } from "react";
import "./css/main.css";
import { Col, Container, Row } from "reactstrap";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EncryptPage } from "./components/Encrypt/EncryptPage";
import { About } from "./components/About";
import { LandingPage } from "./components/LandingPage";

export const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/encrypt" component={EncryptPage} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
