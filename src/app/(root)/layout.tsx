import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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
