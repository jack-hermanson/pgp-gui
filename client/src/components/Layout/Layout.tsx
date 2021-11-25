import { FunctionComponent, ReactNode } from "react";
import { Container } from "reactstrap";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

interface Props {
    children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }: Props) => {
    return (
        <div className="body-container">
            <Navigation />
            <Container className="main-container">{children}</Container>
            <Footer />
        </div>
    );
};
