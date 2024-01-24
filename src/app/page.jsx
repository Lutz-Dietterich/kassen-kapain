import Image from "next/image";
import FormTansaction from "@/components/FormTansaction";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledMain>
      <Image
        className="m-auto"
        src="/logo192x192.png"
        width={192}
        height={192}
        alt="Logo Kassen kaptain"
      />
      <FormTansaction />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
`;
