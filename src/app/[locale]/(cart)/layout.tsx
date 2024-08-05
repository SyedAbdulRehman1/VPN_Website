// components/MainContent.tsx



interface MainContentProps {
  children: React.ReactNode;
}

const IndexLayout: React.FC<MainContentProps> = ({ children }) => {
  return (
    <>
{children}
    </>
  );
};

export default IndexLayout;
