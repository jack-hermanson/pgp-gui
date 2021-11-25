import { FunctionComponent } from "react";
import { Card, CardBody, Input } from "reactstrap";
import { ActionCardHeader } from "jack-hermanson-component-lib";

interface Props {
    message: string;
}

export const EncryptedMessage: FunctionComponent<Props> = ({
    message,
}: Props) => {
    return (
        <Card>
            <ActionCardHeader title="Encrypted Message" />
            <CardBody>
                <Input type="textarea" rows={11} readOnly value={message} />
            </CardBody>
        </Card>
    );
};
