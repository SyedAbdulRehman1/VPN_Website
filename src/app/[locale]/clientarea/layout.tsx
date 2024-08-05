"use client";
import SideNav from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";
import dashboardTranslations from "@/translations/dashboard.json";
import { useEffect, useState } from "react";
import Alert from "@/components/Alert";
import { useRouter } from "next/navigation";
import { getTokenn, removeUser } from "@/services/local-storage";
import Loader from "@/components/loader";
import ModalAlert from "@/components/ModalAlert";
import { post } from "@/services/http";
import { LOGOUT } from "@/utils/api-routes";

// components/MainContent.tsx
interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const router = useRouter();
  const [isLogoutSuccess, setIsLogoutSuccess] = useState(false);
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleLogoutSuccess = async (status: any) => {
    setIsLogoutSuccess(status);
    // logut();
  };

  const logut = async () => {
    try {
      const response: any = await post(LOGOUT, null);
      if (response.message === "Logout Successfully") {
        removeUser();
        router.push("/login");
      } else {
        console.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      const token: any = getTokenn();
      setUser(token);
      if (!token) {
        setShouldRedirect(true);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  }, [shouldRedirect]);

  if (isLoading || shouldRedirect) {
    return <Loader />;
  }

  if (!user) {
    router.push("/login");
  }

  const closeModal = () => {
    setIsLogoutSuccess(false);
  };

  return (
    <>
      <div className="flex justify-center"></div>

      <main className="flex-1 ">
        {/* <Toast /> */}
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
          <SideNav onLogoutSuccess={handleLogoutSuccess} />
          <Header />
          <main className="p-4 h-screen md:ml-64  pt-20">{children}</main>
        </div>
      </main>
      {isLogoutSuccess && (
        <ModalAlert
          onDelete={() => logut()}
          mode="delete"
          title="logout"
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default MainContent;
