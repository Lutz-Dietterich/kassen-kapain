import { create } from "zustand";
import axios from "axios";

const usePartnerStore = create((set, get) => ({
  partnerList: [],
  setPartnerList: (newList) => set({ partnerList: newList }),

  fetchPartnerList: async () => {
    try {
      const partnerList = await axios.get("http://localhost:3000/api/partner");
      get().setPartnerList(partnerList.data.partnerList);
    } catch (error) {
      console.error("felhler beim fetchen der partnerlist", error);
    }
  },

  sendNewPartner: async (newPartner) => {
    try {
      await axios.post("http://localhost:3000/api/partner", {
        partner: newPartner,
      });
    } catch (error) {
      console.error("felhler meim senden des neuen partners", error);
    }
  },
}));

export default usePartnerStore;
