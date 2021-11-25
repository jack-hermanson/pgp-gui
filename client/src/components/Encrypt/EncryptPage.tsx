import { FunctionComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { PageHeader } from "jack-hermanson-component-lib";

export const EncryptPage: FunctionComponent = () => {
    return (
        <div>
            <Row>
                <Col>
                    <PageHeader title="Encrypt Message" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Message:</p>
                </Col>
            </Row>
        </div>
    );
};
