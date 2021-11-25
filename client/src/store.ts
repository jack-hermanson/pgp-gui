import { action, Action, createStore, createTypedHooks } from "easy-peasy";
import { AlertType } from "jack-hermanson-ts-utils";

export interface StoreModel {
    publicKey: string; // recipient's public key
    privateKey: string; // my private key
    setPublicKey: Action<StoreModel, string>;
    setPrivateKey: Action<StoreModel, string>;
    alerts: AlertType[];
    setAlerts: Action<StoreModel, AlertType[]>;
    addAlert: Action<StoreModel, AlertType>;
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
    alerts: [],
    setAlerts: action((state, payload) => {
        state.alerts = payload;
    }),
    addAlert: action((state, payload) => {
        state.alerts = [payload, ...state.alerts];
    }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
