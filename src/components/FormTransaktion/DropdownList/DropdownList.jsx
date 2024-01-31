import styled from "styled-components";
import { FaAnchor } from "react-icons/fa6";
import { useState } from "react";
import NewOptionItem from "../NewOptionItem/NewOptionItem";

export default function DropdownList({
  title,
  placeholder,
  setValue,
  optionsData,
}) {
  const [newItem, setNewItem] = useState(false);
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
          onChange={(e) => setValue(e.target.value)}
        >
          <StyledOption value="">{placeholder}</StyledOption>

          {optionsData?.map((optionData) => (
            <StyledOption
              key={optionData._id}
              value={
                title === "Handelskompane"
                  ? optionData.partner
                  : optionData.category
              }
            >
              {title === "Handelskompane"
                ? optionData.partner
                : optionData.category}
            </StyledOption>
          ))}
        </StyledSelect>
        <FaAnchor className="absolute top-3 right-24" />
        <StyledButton type="button" onClick={() => setNewItem(true)}>
          neu
        </StyledButton>
        {newItem && (
          <NewOptionItem
            title={title}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        )}
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
