export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="shadow-md">{children}</div>
    </div>
  );
}
