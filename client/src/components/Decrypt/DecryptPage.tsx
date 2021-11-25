import { FunctionComponent, useState } from "react";
import { PageHeader } from "jack-hermanson-component-lib";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ButtonColor, LARGE_COLS, TEXTAREA_ROWS } from "../../constants";
import { useStoreActions, useStoreState } from "../../store";
import { DecryptedMessage } from "./DecryptedMessage";
import { decryptMessage } from "../../pgp/decryptMessage";

export const DecryptPage: FunctionComponent = () => {
    const privateKey = useStoreState(state => state.privateKey);
    const setPrivateKey = useStoreActions(actions => actions.setPrivateKey);
    const addAlert = useStoreActions(actions => actions.addAlert);

    const [message, setMessage] = useState("");
    const [passphrase, setPassphrase] = useState("");
    const [decryptedMessage, setDecryptedMessage] = useState("");

    return (
        <div>
            {renderHeader()}
            {renderDescription()}
            <Row>
                <Col xs={12} lg={LARGE_COLS} className="mb-3 mb-lg-0">
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            if (message && privateKey && passphrase) {
                                try {
                                    const result = await decryptMessage({
                                        message: message,
                                        privateKey: privateKey,
                                        passphrase: passphrase,
                                    });
                                    setDecryptedMessage(result);
                                } catch (error: any) {
                                    console.error(error);
                                    addAlert({
                                        text: error.message,
                                        color: "danger",
                                    });
                                    setDecryptedMessage("");
                                }
                            }
                        }}
                        onReset={e => {
                            e.preventDefault();
                            setMessage("");
                            setPassphrase("");
                            setPrivateKey("");
                            setDecryptedMessage("");
                        }}
                    >
                        {renderMessage()}
                        {renderPrivateKey()}
                        {renderPassphrase()}
                        {renderButtons()}
                    </form>
                </Col>
                <Col xs={12} lg={12 - LARGE_COLS}>
                    {renderDecryptedMessage()}
                </Col>
            </Row>
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
                <Col>
                    <FormGroup>
                        <Label for={id} className="form-label required">
                            Encrypted Message
                        </Label>
                        <Input
                            required
                            id={id}
                            rows={TEXTAREA_ROWS}
                            type="textarea"
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value);
                            }}
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
                <Col>
                    <FormGroup>
                        <Label className="form-label required" for={id}>
                            PGP Private Key
                        </Label>
                        <Input
                            required
                            type="textarea"
                            id={id}
                            value={privateKey}
                            onChange={e => {
                                setPrivateKey(e.target.value);
                            }}
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
                <Col>
                    <FormGroup>
                        <Label className="form-label required" for={id}>
                            Passphrase
                        </Label>
                        <Input
                            required
                            type="password"
                            id={id}
                            placeholder="PGP passphrase..."
                            value={passphrase}
                            onChange={e => {
                                setPassphrase(e.target.value);
                            }}
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

    function renderDecryptedMessage() {
        if (decryptedMessage) {
            return <DecryptedMessage decryptedMessage={decryptedMessage} />;
        }
    }
};
