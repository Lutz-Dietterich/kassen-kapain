import styled from "styled-components";
import { useState } from "react";

export default function TextField({ placeholder }) {
  const [text, setText] = useState("");

  console.log(text);
  return (
    <>
      <StyledTextarea
        type="text"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
      ;
    </>
  );
}

const StyledTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100px;
  background-color: white;
  text-align: start;
  hyphens: auto;
  color: var(--primary-color-1);
  border: 1px solid var(--color-border);
  border-radius: 5px;
`;
