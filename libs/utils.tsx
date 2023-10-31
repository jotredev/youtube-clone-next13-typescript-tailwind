import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (numero: number) => {
  if (numero >= 1000) {
    const abreviacion = ['', 'K', 'M', 'B', 'T']; // abreviaciones posibles
    const index = Math.floor(Math.log10(numero) / 3); // calcular el índice de abreviación
    const numeroAbreviado = (numero / Math.pow(1000, index)).toFixed(1); // redondear el número
    return numeroAbreviado + abreviacion[index]; // agregar la abreviación correspondiente
  }
  return numero;
};
