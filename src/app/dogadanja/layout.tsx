import { SidebarProvider } from "@/components/ui/sidebar";

export default function DogadanjaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        {children}
    </SidebarProvider>
  );
}
