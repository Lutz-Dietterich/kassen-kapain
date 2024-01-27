import styled from "styled-components";
import { FaAnchor } from "react-icons/fa6";
export default function DropdownList({ title, placeholder }) {
  return (
    <>
      <StyledLabel htmlFor="select">{title}</StyledLabel>
      <StyledDiv className="relative">
        <StyledSelect
          id="select"
          name="select"
          placeholder={placeholder}
          defaultValue="placeholder"
          required
        >
          <StyledOption value="">{placeholder}</StyledOption>
          <StyledOption value="Lidl">Lidl</StyledOption>
          <StyledOption value="Aldi">Aldi</StyledOption>
          <StyledOption value="Rewe">Rewe</StyledOption>
          <StyledOption value="Chef">Chef</StyledOption>
          <StyledOption value="Amazon">Amazon</StyledOption>
        </StyledSelect>
        <FaAnchor className="absolute top-3 right-24" />
        <StyledButton type="button">neu</StyledButton>
      </StyledDiv>
    </>
  );
}

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 78%;
  margin-bottom: 15px;
  padding: 8px;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:invalid {
    color: var(--color-border);
  }

  [disabled] {
    color: var(--color-border);
  }

  option {
    color: var(--primary-color-1);
  }
`;

const StyledOption = styled.option``;

const StyledButton = styled.button`
  width: 20%;
  margin: 0 0 15px 15px;
  background-color: var(--primary-color-1);
  color: var(--secondary-color-2);
  border-radius: 5px;
`;
