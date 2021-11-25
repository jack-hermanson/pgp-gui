import { FunctionComponent } from "react";
import { PageHeader } from "jack-hermanson-component-lib";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ButtonColor, LARGE_COLS, TEXTAREA_ROWS } from "../../constants";

export const DecryptPage: FunctionComponent = () => {
    return (
        <div>
            {renderHeader()}
            {renderDescription()}
            <form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                {renderMessage()}
                {renderPrivateKey()}
                {renderPassphrase()}
                {renderButtons()}
            </form>
        </div>
    );

    function renderHeader() {
        return (
            <Row>
                <Col>
                    <PageHeader title="Decrypt Message" />
                </Col>
            </Row>
        );
    }

    function renderDescription() {
        return (
            <Row>
                <Col>
                    <p className="lead">
                        To decrypt a message sent to you, paste the encrypted
                        message here, along with your private PGP key and
                        passphrase.
                    </p>
                </Col>
            </Row>
        );
    }

    function renderMessage() {
        const id = "encrypted-message-input";
        return (
            <Row>
                <Col xs={12} lg={LARGE_COLS}>
                    <FormGroup>
                        <Label for={id} className="form-label required">
                            Encrypted Message
                        </Label>
                        <Input
                            id={id}
                            rows={TEXTAREA_ROWS}
                            type="textarea"
                            placeholder="-----BEGIN PGP MESSAGE-----
-----END PGP MESSAGE-----"
                        />
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    function renderPrivateKey() {
        const id = "private-key-input";
        return (
            <Row>
                <Col xs={12} lg={LARGE_COLS}>
                    <FormGroup>
                        <Label className="form-label required" for={id}>
                            PGP Private Key
                        </Label>
                        <Input
                            type="textarea"
                            id={id}
                            placeholder="-----BEGIN PGP PRIVATE KEY BLOCK-----
-----END PGP PRIVATE KEY BLOCK-----"
                            rows={TEXTAREA_ROWS}
                        />
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    function renderPassphrase() {
        const id = "passphrase-input";
        return (
            <Row>
                <Col xs={12} lg={LARGE_COLS}>
                    <FormGroup>
                        <Label className="form-label required" for={id}>
                            Passphrase
                        </Label>
                        <Input
                            type="password"
                            id={id}
                            placeholder="PGP passphrase..."
                        />
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    function renderButtons() {
        return (
            <Row>
                <Col>
                    <div className="bottom-buttons">
                        <Button color={ButtonColor.SUBMIT} type="submit">
                            Decrypt Message
                        </Button>
                        <Button color={ButtonColor.RESET} type="reset">
                            Reset
                        </Button>
                    </div>
                </Col>
            </Row>
        );
    }
};
