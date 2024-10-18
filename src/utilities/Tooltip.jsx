import React, { useState, useEffect } from "react";
import { Figma, Github, Linkedin, Mail, Clipboard } from "lucide-react"; // Asegúrate de tener instalada la biblioteca lucide-react

const Tooltip = ({ children, text, icon: Icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
    setTimeout(() => {
      setShowTooltip(true);
    }, 300); // Retraso de 300 ms antes de mostrar el tooltip
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setShowTooltip(false);
  };

  useEffect(() => {
    if (!isVisible) {
      setShowTooltip(false);
    }
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-10 p-2 text-white bg-gray-800 rounded-md text-sm transform -translate-y-full translate-x-7">
          <div className="flex gap-2">
            {text}
            {Icon && <Icon className="w-4 h-4 mr-1 inline" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
