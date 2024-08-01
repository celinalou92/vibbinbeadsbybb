import Nav from "@components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <br />
      <br />
      {children}
    </>
  );
}
