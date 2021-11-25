import { FunctionComponent } from "react";
import { Col, Container, Row } from "reactstrap";

export const Footer: FunctionComponent = () => {
    return (
        <div className="footer-container background-blur mt-auto">
            <Container className="pb-3 pt-2 mt-2 mb-0">
                <Row>
                    <Col className="text-muted d-flex">
                        <p className="mb-0">Bottom footer</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
