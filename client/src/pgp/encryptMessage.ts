import * as openpgp from "openpgp";

interface EncryptProps {
    publicKey: string;
    message: string;
}

export async function encryptMessage(props: EncryptProps): Promise<string> {
    const publicKey = await openpgp.readKey({ armoredKey: props.publicKey });
    const message = await openpgp.createMessage({ text: props.message });

    return await openpgp.encrypt({
        message: message,
        encryptionKeys: publicKey,
    });
}
