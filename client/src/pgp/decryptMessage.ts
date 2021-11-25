import * as openpgp from "openpgp";
import { PGP_PRIVATE_KEY_BEGIN, PGP_PRIVATE_KEY_END } from "../constants";

interface DecryptProps {
    message: string;
    privateKey: string;
    passphrase: string;
}

export async function decryptMessage(props: DecryptProps): Promise<string> {
    if (
        !props.privateKey.startsWith(PGP_PRIVATE_KEY_BEGIN) ||
        !props.privateKey.endsWith(PGP_PRIVATE_KEY_END)
    ) {
        throw new Error(
            `The private key must begin with "${PGP_PRIVATE_KEY_BEGIN}" and end with "${PGP_PRIVATE_KEY_END}".`
        );
    }

    const privateKey = await openpgp.readPrivateKey({
        armoredKey: props.privateKey,
    });

    const decryptedKey = await openpgp.decryptKey({
        privateKey: privateKey,
        passphrase: props.passphrase,
    });

    const message = await openpgp.readMessage({
        armoredMessage: props.message,
    });

    const decrypted = await openpgp.decrypt({
        message: message,
        decryptionKeys: decryptedKey,
    });

    return decrypted.data;
}
