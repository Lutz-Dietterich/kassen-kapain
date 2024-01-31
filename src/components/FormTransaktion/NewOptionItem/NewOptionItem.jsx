import styled from "styled-components";
import { useState } from "react";
import usePartnerStore from "../../../zustand/partnerStore";
import useCategoryStore from "../../../zustand/categoryStore";

export default function NewOptionItem({ title, newItem, setNewItem }) {
  const [input, setInput] = useState("");

  const { sendNewPartner, fetchPartnerList } = usePartnerStore();
  const { sendNewCategory, fetchCategoryList } = useCategoryStore();

  const placeholder =
    title === "Handelskompane"
      ? "trage einen neuen Kompanenen ein"
      : title === "Ladungsklasse"
      ? "trage eine neue Ladungsklasse ein"
      : "";

  const handleSendPartner = async (e) => {
    e.preventDefault();
    try {
      await sendNewPartner(input);
      fetchPartnerList();
    } catch (error) {
      console.error("Fehler beim Senden des neuen Partners", error);
    } finally {
      setInput("");
      setNewItem(false);
    }
  };
  const handleSendCategory = async (e) => {
    e.preventDefault();
    try {
      await sendNewCategory(input);
      fetchCategoryList();
    } catch (error) {
      console.error("Fehler beim Senden des neuen Partners", error);
    } finally {
      setInput("");
      setNewItem(false);
    }
  };

  return (
    <>
      <StyledCard>
        <StyledHeadline>
          {title === "Handelskompane" ? "Neuer Kompane" : ""}
          {title === "Ladungsklasse" ? "Neue Ladungsklasse" : ""}
        </StyledHeadline>
        <StyledInput
          type="text"
          value={input}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
        />
        <StyledButtonSection>
          <StyledCancelButton type="button" onClick={() => setNewItem(false)}>
            Abbrechen
          </StyledCancelButton>
          <StyledSubmitButton
            type="button"
            onClick={
              title === "Handelskompane"
                ? handleSendPartner
                : handleSendCategory
            }
          >
            Speichern
          </StyledSubmitButton>
        </StyledButtonSection>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  background-color: white;
  padding: 8px;
  width: 100%;
  z-index: 100;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.4);
`;

const StyledHeadline = styled.h2`
  margin: 0 0 15px 5%;
`;

const StyledInput = styled.input`
  width: 90%;
  margin: auto;
  padding: 8px;
  box-shadow: var(--box-shadow);
  margin-bottom: 15px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
`;

const StyledButtonSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledCancelButton = styled.button`
  width: 35%;
  padding: 8px;
  background-color: var(--primary-color-1);
  color: var(--secondary-color-2);
  border-radius: 5px;
  cursor: pointer;
`;
const StyledSubmitButton = styled.button`
  width: 35%;
  padding: 8px;
  background-color: var(--primary-color-1);
  color: var(--secondary-color-2);
  border-radius: 5px;
  cursor: pointer;
`;
