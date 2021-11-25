import { FunctionComponent, useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { PageHeader } from "jack-hermanson-component-lib";
import { ButtonColor, LARGE_COLS, TEXTAREA_ROWS } from "../../constants";
import { useStoreActions, useStoreState } from "../../store";
import { encryptMessage } from "../../pgp/encryptMessage";
import { EncryptedMessage } from "./EncryptedMessage";

export const EncryptPage: FunctionComponent = () => {
    const publicKey = useStoreState(state => state.publicKey);
    const setPublicKey = useStoreActions(actions => actions.setPublicKey);

    const [message, setMessage] = useState("");
    const [encryptedMessage, setEncryptedMessage] = useState("");

    return (
        <div>
            {renderHeader()}
            {renderDescription()}
            <Row>
                <Col xs={12} lg={LARGE_COLS} className="mb-3 mb-lg-0">
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            if (publicKey && message) {
                                try {
                                    const result = await encryptMessage({
                                        message,
                                        publicKey,
                                    });
                                    setEncryptedMessage(result);
                                } catch (error: any) {
                                    console.error(error.message);
                                }
                            }
                        }}
                        onReset={e => {
                            e.preventDefault();
                            setPublicKey("");
                            setMessage("");
                            setEncryptedMessage("");
                        }}
                    >
                        {renderMessage()}
                        {renderPublicKey()}
                        {renderButtons()}
                    </form>
                </Col>
                <Col xs={12} lg={12 - LARGE_COLS}>
                    {renderEncryptedMessage()}
                </Col>
            </Row>
        </div>
    );

    function renderHeader() {
        return (
            <Row>
                <Col>
                    <PageHeader title="Encrypt Message" />
                </Col>
            </Row>
        );
    }

    function renderDescription() {
        return (
            <Row>
                <Col>
                    <p className="lead">
                        To encrypt a message before sending it to someone else,
                        write your message here and paste the recipient's public
                        key.
                    </p>
                </Col>
            </Row>
        );
    }

    function renderMessage() {
        const id = "message-input";

        return (
            <Row>
                <Col>
                    <FormGroup>
                        <Label className="form-label required" for={id}>
                            Message to Encrypt
                        </Label>
                        <Input
                            required
                            id={id}
                            type="textarea"
                            rows={TEXTAREA_ROWS}
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value);
                            }}
                            placeholder="Unencrypted message in plain text..."
                        />
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    function renderPublicKey() {
        const id = "public-key-input";

        return (
            <Row>
                <Col>
                    <Label className="form-label required" for={id}>
                        Recipient's Public Key
                    </Label>
                    <Input
                        required
                        id={id}
                        type="textarea"
                        rows={TEXTAREA_ROWS}
                        value={publicKey}
                        onChange={e => {
                            setPublicKey(e.target.value);
                        }}
                        placeholder="-----BEGIN PGP PUBLIC KEY BLOCK-----
-----END PGP PUBLIC KEY BLOCK-----"
                    />
                </Col>
            </Row>
        );
    }

    function renderButtons() {
        return (
            <Row>
                <Col>
                    <div className="bottom-buttons">
                        <Button type="submit" color={ButtonColor.SUBMIT}>
                            Encrypt Message
                        </Button>
                        <Button type="reset" color={ButtonColor.RESET}>
                            Reset
                        </Button>
                    </div>
                </Col>
            </Row>
        );
    }

    function renderEncryptedMessage() {
        if (encryptedMessage) {
            return <EncryptedMessage message={encryptedMessage} />;
        }
    }
};
