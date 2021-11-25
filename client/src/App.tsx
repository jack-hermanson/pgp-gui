import { FunctionComponent } from "react";
import "./css/main.css";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EncryptPage } from "./components/Encrypt/EncryptPage";
import { About } from "./components/About";
import { LandingPage } from "./components/LandingPage";
import { DecryptPage } from "./components/Decrypt/DecryptPage";
import { Alerts } from "./components/Alerts";

export const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Alerts />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/encrypt" component={EncryptPage} />
                    <Route exact path="/decrypt" component={DecryptPage} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
