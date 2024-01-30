"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import AmountField from "./AmountField";
import DropdownList from "./DropdownList";
import TextField from "./TextField";
import useTransactionStore from "@/zustand/transactionStore";
import usePartnerStore from "@/zustand/partnerStore";

export default function FormTansaction() {
  const { setPartner, setCategory, sendTransaction } = useTransactionStore(
    (state) => ({
      setPartner: state.setPartner,
      setCategory: state.setCategory,
      sendTransaction: state.sendTransaction,
    })
  );

  const { sendNewPartner, partnerList, fetchPartnerList } = usePartnerStore(
    (state) => ({
      sendNewPartner: state.sendNewPartner,
      partnerList: state.partnerList,
      fetchPartnerList: state.fetchPartnerList,
    })
  );

  const onclick = (e) => {
    e.preventDefault();
    sendTransaction();
  };

  useEffect(() => {
    fetchPartnerList();
  }, [fetchPartnerList]);

  const catagoryList = [
    {
      _id: "65b6b3c3534ac29beb9b8703",
      partner: "Lebensmittel",
      __v: 0,
    },
  ];
  return (
    <StyledForm>
      <AmountField />
      <DropdownList
        title="Handelskompane"
        placeholder="wähle einen Kompanen"
        setValue={setPartner}
        optionsData={partnerList}
      />
      <DropdownList
        title="Ladungsklasse"
        placeholder="wähle eine Ladungsklasse"
        setValue={setCategory}
        optionsData={catagoryList}
      />
      <TextField />
      <StyledButton type="button" onClick={onclick}>
        speichern
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  min-height: 450px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: var(--secondary-color-2);
  background-color: var(--primary-color-1);
`;
