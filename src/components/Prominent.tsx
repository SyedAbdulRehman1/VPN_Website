import React, { ReactNode } from "react";

type ProminentProps = {
  value?: string | null;
  children: ReactNode | null;
};

const Prominent: React.FC<ProminentProps> = ({ value, children }) => {
  return (
    <span className="text-orange-600">
      {value !== null && value !== undefined ? value : children}
    </span>
  );
};
export default Prominent;
