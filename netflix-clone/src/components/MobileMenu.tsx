import React from "react";

interface MobileMenuItemProps {
  label: string;
}

const MobileMenuItem = ({ label }: MobileMenuItemProps) => {
  return (
    <div
      className="px-3 
      text-center
      text-white 
      hover:underline"
    >
      {label}
    </div>
  );
};

interface Props {
  visible?: boolean;
}

const MobileMenu = ({ visible }: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <MobileMenuItem label={"Home"} />
        <MobileMenuItem label={"Series"} />
        <MobileMenuItem label={"Films"} />
        <MobileMenuItem label={"New & Popular"} />
        <MobileMenuItem label={"My List"} />
        <MobileMenuItem label={"Browse by Languages"} />
      </div>
    </div>
  );
};

export default MobileMenu;
