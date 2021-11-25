import { FunctionComponent } from "react";
import { MessageCard } from "../MessageCard";

interface Props {
    message: string;
}

export const EncryptedMessage: FunctionComponent<Props> = ({
    message,
}: Props) => {
    return <MessageCard title="Encrypted Message" message={message} />;
};
