import Image from "next/image";
import FormTansaction from "../components/FormTransaktion/FormTansaction";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Image
          className="m-auto"
          src="/logo192x192.png"
          width={192}
          height={192}
          alt="Logo Kassen kaptain"
          priority
        />
        <FormTansaction />
      </main>
    </>
  );
}
