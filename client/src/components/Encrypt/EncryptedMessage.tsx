import { FunctionComponent } from "react";
import { Card, CardBody, Input } from "reactstrap";
import { ActionCardHeader } from "jack-hermanson-component-lib";
import { MessageCard } from "../MessageCard";

interface Props {
    message: string;
}

export const EncryptedMessage: FunctionComponent<Props> = ({
    message,
}: Props) => {
    return <MessageCard title="Encrypted Message" message={message} />;
};
