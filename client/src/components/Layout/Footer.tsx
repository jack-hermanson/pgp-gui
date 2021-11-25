import { FunctionComponent } from "react";
import { Col, Container, Row } from "reactstrap";

export const Footer: FunctionComponent = () => {
    return (
        <div className="footer-container background-blur mt-auto">
            <Container className="pb-3 pt-2 mt-2 mb-0">
                <Row>
                    <Col className="text-muted d-flex">
                        <a
                            target="_blank"
                            href="https://github.com/jack-hermanson/pgp-gui"
                            className="plain me-auto"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                        <span className="ms-auto">
                            Copyleft 2021 &#9398; Jack Hermanson
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
