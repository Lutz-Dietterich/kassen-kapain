import { create } from "zustand";
import axios from "axios";

const usePartnerStore = create((set, get) => ({
  partner: [],

  setPartner: (neuerPartner) =>
    set({ partner: [...get().partner, neuerPartner] }),
}));
