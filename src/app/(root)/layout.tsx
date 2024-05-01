import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const revalidate = 5000;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
