import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kassen-Kaptain Dein perfektes Kassenbuch",
  description: "Mit dem Kassenkaptain hast du alle deine Finazen im Blick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={roboto.className}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
