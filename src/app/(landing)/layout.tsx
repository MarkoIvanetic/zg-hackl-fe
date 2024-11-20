export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex-1 w-full p-4">{children}</main>
    </div>
  );
}
