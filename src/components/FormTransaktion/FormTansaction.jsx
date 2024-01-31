"use client";

import React, { useEffect } from "react";
import styled from "styled-components";
import AmountField from "./AmountField/AmountField";
import DropdownList from "./DropdownList/DropdownList";
import TextField from "./TextField/TextField";
import useTransactionStore from "../../zustand/transactionStore";
import usePartnerStore from "../../zustand/partnerStore";
import useCategoryStore from "../../zustand/categoryStore";

export default function FormTansaction() {
  const { setPartner, setCategory, sendTransaction } = useTransactionStore(
    (state) => ({
      setPartner: state.setPartner,
      setCategory: state.setCategory,
      sendTransaction: state.sendTransaction,
    })
  );

  const { partnerList, fetchPartnerList } = usePartnerStore((state) => ({
    partnerList: state.partnerList,
    fetchPartnerList: state.fetchPartnerList,
  }));

  const { categoryList, fetchCategoryList } = useCategoryStore((state) => ({
    categoryList: state.categoryList,
    fetchCategoryList: state.fetchCategoryList,
  }));

  const onclick = (e) => {
    e.preventDefault();
    sendTransaction();
  };

  useEffect(() => {
    fetchPartnerList();
    fetchCategoryList();
  }, [fetchPartnerList, fetchCategoryList]);

  return (
    <StyledForm onSubmit={onclick}>
      <AmountField />
      <DropdownList
        title="Handelskompane"
        placeholder="wähle einen Kompanen"
        setValue={setPartner}
        optionsData={partnerList}
        required
      />
      <DropdownList
        title="Ladungsklasse"
        placeholder="wähle eine Ladungsklasse"
        setValue={setCategory}
        optionsData={categoryList}
        required
      />
      <TextField />
      <StyledButton type="submit">speichern</StyledButton>
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
