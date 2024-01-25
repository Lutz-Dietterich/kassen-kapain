import styled from "styled-components";
import { useEffect, useState } from "react";

export default function AmountField() {
  const [betrag, setBetrag] = useState("");
  const [isPositive, setIsPositive] = useState(true);

  const handleBetrag = (e) => {
    let value = e.target.value;
    value = value.replace(/,/g, ".");
    const regex = /^-?[0-9]*(\.[0-9]{0,2})?$/;
    if (regex.test(value)) {
      setBetrag(value);
    }
  };

  useEffect(() => {
    if (betrag > 0) {
      setIsPositive(true);
    }
  }, [betrag]);

  const handleBlur = () => {
    // Formatierung des Betrags bei Fokusverlust
    if (betrag !== "") {
      setBetrag(parseFloat(betrag).toFixed(2));
    }
  };

  function positiveClick() {
    if (!isPositive && betrag !== "") {
      setBetrag(parseFloat(Math.abs(betrag)).toFixed(2));
      setIsPositive(true);
    }
  }
  function negativeClick() {
    if (isPositive && betrag !== "") {
      setBetrag(parseFloat(-Math.abs(betrag)).toFixed(2));
      setIsPositive(false);
    }
  }

  const handlefloat = () => {
    setBetrag(parseFloat(betrag));
  };

  console.log(typeof betrag);
  console.log(betrag);

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
          value={betrag}
          onBlur={handleBlur}
        />
        <StyledParagraph>€</StyledParagraph>
        <StyledButton type="button" onClick={positiveClick}>
          +
        </StyledButton>
        <StyledButtonLight type="button" onClick={negativeClick}>
          -
        </StyledButtonLight>
      </StyledDiv>
      <button type="button" onClick={handlefloat}>
        klick
      </button>
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
`;

const StyledInput = styled.input`
  padding: 8px 0 8px 20px;
  margin-right: 15px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  width: 195px;
  color: ${(props) => (props.$isPositive ? "var(--primary-color-1)" : "red")};
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
