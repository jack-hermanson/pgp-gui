import { FunctionComponent } from "react";
import { MessageCard } from "../MessageCard";

interface Props {
    decryptedMessage: string;
}

export const DecryptedMessage: FunctionComponent<Props> = ({
    decryptedMessage,
}: Props) => {
    return <MessageCard title="Decrypted Message" message={decryptedMessage} />;
};
