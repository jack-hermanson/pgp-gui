import { FunctionComponent, useEffect, useState } from "react";
import { Button, Card, CardBody, Input } from "reactstrap";
import { ActionCardHeader } from "jack-hermanson-component-lib";

interface Props {
    title: string;
    message: string;
    rows?: number;
}

export const MessageCard: FunctionComponent<Props> = ({
    title,
    message,
    rows = 11,
}: Props) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (message) {
            setCopied(false);
        }
    }, [setCopied, message]);

    return (
        <Card>
            <ActionCardHeader title={title} />
            <CardBody>
                <Input
                    id="message-text"
                    type="textarea"
                    rows={rows}
                    readOnly
                    value={message}
                />
                <div className="col-12 mt-3 d-grid">
                    <Button
                        color="info"
                        onClick={async () => {
                            await navigator.clipboard.writeText(message);
                            setCopied(true);
                            document.getElementById("message-text")?.focus();
                        }}
                    >
                        {copied && <span>&#10003;</span>} Cop
                        {copied ? "ied" : "y"} to Clipboard
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};
