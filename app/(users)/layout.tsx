
import "../globals.css";
import ClientProvider from "./components/ClientProvider";

export const metadata = {
  title: "Dispatch Hub",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <main>{children}</main>
    </ClientProvider>
  );
}
