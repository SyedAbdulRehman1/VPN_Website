import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";
// components/MainContent.tsx
interface MainContentProps {
    children: React.ReactNode;
  }
  
  const IndexLayout: React.FC<MainContentProps> = ({ children }) => {
    return (
      <main className="flex-1 bg-white dark:bg-gray-900">
        {/* <Navigation /> */}
        <Navigation />
        {children}
        {/* <Footer /> */}
        <Footer />
      </main>
    );
  };

  export default IndexLayout;