"use client";

import React from "react";
import styled from "styled-components";
import AmountField from "./AmountField";
import DropdownList from "./DropdownList";
import TextField from "./TextField";
import useTransactionStore from "@/zustand/transactionStore";

export default function FormTansaction() {
  const { mountTransaction } = useTransactionStore();

  const onclick = (e) => {
    e.preventDefault();
    mountTransaction();
    console.log("jup");
  };

  return (
    <StyledForm>
      <AmountField />
      <DropdownList title="Handelskompane" placeholder="wähle einen Kompanen" />
      <DropdownList
        title="Ladungsklasse"
        placeholder="wähle eine Ladungsklasse"
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
