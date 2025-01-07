import { create } from "zustand";

export const termTypeInitialState: any = {
    permit: {
        list: [],
        types: [],
        loading: false,
    },
    bill: {
        list: [],
        default_term: "",
        loading: false,
    },
    addTermTypeConfirmLoading: false,
};

export const useAddLoabour = create<any>(() => ({
    ...termTypeInitialState,
}));

export const getAddTermTypeConfirmLoading = () => {
    return useAddLoabour((s) => s?.addTermTypeConfirmLoading);
};
