import { useState, useEffect, useRef } from 'react';

// Hook temporalmente deshabilitado para evitar errores
// export const useScrollAnimation = () => {
//   return [true, null]; // Valores por defecto
// };

// Versión simplificada que no causa errores
export const useScrollAnimation = () => {
  return {
    observeElement: () => {},
    isVisible: () => true
  };
};
