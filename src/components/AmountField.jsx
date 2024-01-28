import styled from "styled-components";
import useTransactionStore from "@/zustand/transactionStore";
import { useEffect, useState } from "react";

export default function AmountField() {
  const { name, amount, setAmount, setName } = useTransactionStore((state) => ({
    amount: state.amount,
    setAmount: state.setAmount,
    setName: state.setName,
    name: state.name,
  }));
  const [isPositive, setIsPositive] = useState(true);

  const handleBetrag = (e) => {
    let value = e.target.value;
    value = value.replace(/,/g, ".");
    const regex = /^-?[0-9]*(\.[0-9]{0,2})?$/;
    if (regex.test(value)) {
      setAmount(value);
    }
  };

  useEffect(() => {
    if (amount > 0) {
      setIsPositive(true);
    }
  }, [amount, setIsPositive, setName]);

  const handleBlur = () => {
    // Formatierung des Betrags bei Fokusverlust
    if (amount !== "") {
      setAmount(parseFloat(amount).toFixed(2));
      if (amount > 0) {
        setName("Einnahme");
      }
    }
  };

  function positiveClick() {
    if (amount !== "") {
      setAmount(parseFloat(Math.abs(amount)).toFixed(2));
      setIsPositive(true);
      setName("Einnahme");
    }
  }
  function negativeClick() {
    if (amount !== "") {
      setAmount(parseFloat(-Math.abs(amount)).toFixed(2));
      setIsPositive(false);
      setName("Ausgabe");
    }
  }

  return (
    <StyledSection>
      <StyledLabel htmlFor="moneten">Moneten</StyledLabel>
      <StyledDiv>
        <StyledInput
          type="text"
          id="moneten"
          name="moneten"
          placeholder="Betrag"
          onChange={handleBetrag}
          $isPositive={isPositive}
          value={amount}
          onBlur={handleBlur}
          required
        />
        <StyledParagraph>€</StyledParagraph>
        <StyledButton type="button" onClick={positiveClick}>
          +
        </StyledButton>
        <StyledButtonLight type="button" onClick={negativeClick}>
          -
        </StyledButtonLight>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--primary-color-1);
`;

const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  padding: 8px 0 8px 8px;
  margin-right: 15px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  width: 195px;
  color: ${(props) => (props.$isPositive ? "var(--primary-color-1)" : "red")};

  &::placeholder {
    color: var(--color-border);
  }
`;

const StyledParagraph = styled.p`
  position: absolute;
  right: 140px;
  padding: 8px 0;
`;

const StyledButton = styled.button`
  width: 70px;
  border-radius: 5px 0 0 5px;
  padding: 8px 10px 8px 10px;
  background-color: var(--primary-color-1);
  color: var(--secondary-color-2);
`;
const StyledButtonLight = styled.button`
  width: 70px;
  border-radius: 0 5px 5px 0;
  padding: 8px 10px 8px 10px;
  color: var(--primary-color-1);
  background-color: var(--secondary-color-2);
`;
