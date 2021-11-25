import { FunctionComponent, useCallback, useState } from "react";
import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from "reactstrap";
import { useHistory, NavLink } from "react-router-dom";
import { APP_NAME } from "../../constants";

export const Navigation: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = useCallback(() => setIsOpen(o => !o), [setIsOpen]);
    const close = useCallback(() => setIsOpen(false), [setIsOpen]);

    const history = useHistory();

    return (
        <Container className="mt-lg-3 py-2 background-blur">
            <Navbar dark className="px-0" expand="lg" container={false}>
                <NavbarBrand
                    className="d-flex hover-mouse"
                    onClick={() => {
                        history.push("/about");
                        close();
                    }}
                >
                    <div className="my-auto">{APP_NAME}</div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar className="ms-lg-auto">
                        <NavItem>
                            <NavLink
                                to="/encrypt"
                                className="nav-link"
                                onClick={close}
                            >
                                Encrypt
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                to="/decrypt"
                                className="nav-link"
                                onClick={close}
                            >
                                Decrypt
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};
