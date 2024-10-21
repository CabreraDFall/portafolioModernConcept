import React, { useState, useEffect, useRef } from "react";
import { Figma, Github, Linkedin, Mail, Clipboard } from "lucide-react"; // Asegúrate de tener instalada la biblioteca lucide-react

const Tooltip = ({ children, text, icon: Icon }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const tooltipRef = useRef(null);

  // Función para alternar la visibilidad del tooltip al hacer clic
  const handleToggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };

  const handleIconClick = async () => {
    if (Icon === Clipboard) {
      try {
        await navigator.clipboard.writeText(text); // Copia el texto al portapapeles
        setIsCopied(true); // Cambia el estado a copiado
        setTimeout(() => {
          setIsCopied(false); // Resetea el estado de copiado después de 1500 ms
        }, 1500); // Puedes ajustar el tiempo
      } catch (err) {
        console.error("Error al copiar el texto: ", err);
      }
    }
  };

  // Manejador para cerrar el tooltip si se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setShowTooltip(false); // Oculta el tooltip si el clic es fuera
    }
  };

  // Efecto para agregar/quitar el evento de clic global
  useEffect(() => {
    if (showTooltip) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside); // Limpieza del evento al desmontar el componente
    };
  }, [showTooltip]);

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <div
        className="cursor-pointer"
        onClick={() => {
          handleToggleTooltip(); // Muestra/oculta el tooltip
          handleIconClick(); // Si es un icono de copiar, cambia el estado de copiado
        }}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-10 p-2 text-white bg-gray-800 rounded-md text-sm transform -translate-y-full translate-x-7">
          <div className="flex gap-2">
            {text}
            {Icon && (
              <Icon
                className={`w-4 h-4 mr-1 inline ${
                  isCopied ? "text-green-500" : "text-white"
                }`} // Cambia el color del ícono
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
