import { action, Action, createStore, createTypedHooks } from "easy-peasy";

export interface StoreModel {
    publicKey: string; // recipient's public key
    privateKey: string; // my private key
    setPublicKey: Action<StoreModel, string>;
    setPrivateKey: Action<StoreModel, string>;
}

export const store = createStore<StoreModel>({
    publicKey: "",
    privateKey: "",
    setPublicKey: action((state, payload) => {
        state.publicKey = payload;
    }),
    setPrivateKey: action((state, payload) => {
        state.privateKey = payload;
    }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
