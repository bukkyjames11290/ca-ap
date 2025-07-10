import Footer from "@/components/dashboard/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="pb-[80px] h-screen bg-[#ececec]">{children}</main>
      <Footer />
    </>
  );
}
