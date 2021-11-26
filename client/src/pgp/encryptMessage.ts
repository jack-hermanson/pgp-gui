import * as openpgp from "openpgp";
import { PGP_PUBLIC_KEY_BEGIN, PGP_PUBLIC_KEY_END } from "../constants";

interface EncryptProps {
    publicKey: string;
    message: string;
}

export async function encryptMessage(props: EncryptProps): Promise<string> {
    if (
        !props.publicKey.trim().startsWith(PGP_PUBLIC_KEY_BEGIN) ||
        !props.publicKey.trim().endsWith(PGP_PUBLIC_KEY_END)
    ) {
        throw new Error(
            `Public key must start with "${PGP_PUBLIC_KEY_BEGIN}" and end with "${PGP_PUBLIC_KEY_END}".`
        );
    }

    const publicKey = await openpgp.readKey({ armoredKey: props.publicKey });
    const message = await openpgp.createMessage({ text: props.message });

    try {
        return await openpgp.encrypt({
            message: message,
            encryptionKeys: publicKey,
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
