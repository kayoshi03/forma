import { create } from "zustand";

export interface ModalItem {
    key: string;
    Component: React.ReactNode;
}

interface ModalState {
    stack: ModalItem[];
    registerModal: {[key: string]: React.ReactNode};
    register: (key: string, children: React.ReactNode) => void;
    openModal: (key: string) => void;
    closeModal: (key: string) => void;
}

export const ModalStore = create<ModalState>((set) => ({
    stack: [],
    registerModal: {},
    register: (key, children) => {
        const error = new Error(`Modal with key "${key}" is already registered.`);
        if (key in ModalStore.getState().registerModal) {
            throw error;
        }
        else {
            set(state => ({registerModal: {...state.registerModal, [key]: children}}))
        }
    },
    openModal: (key) => {
        const Component = ModalStore.getState().registerModal[key];
        const item =  {key, Component};
        if (!Component) {
            throw new Error(`Modal with key "${key}" is not registered.`);
        }
        set(state => ({stack: [...state.stack, item]}))        
    },
    closeModal: (key) => {
        if(!ModalStore.getState().stack.find(item => item.key === key)) return;
        set({stack: []})
    }
}));