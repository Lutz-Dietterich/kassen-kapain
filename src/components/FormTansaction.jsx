"use client";

import React from "react";
import styled from "styled-components";
import AmountField from "./AmountField";
import DropdownList from "./DropdownList";
import TextField from "./TextField";

export default function FormTansaction() {
  return (
    <StyledForm>
      <AmountField />
      <DropdownList />
      <DropdownList />
      <TextField placeholder="KapitänsKommentar: mache einen Eintrag im Logbuch" />
      <StyledButton type="submit">speichern</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  min-height: 450px;
  background-color: white;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: var(--secondary-color-2);
  background-color: var(--primary-color-1);
`;
