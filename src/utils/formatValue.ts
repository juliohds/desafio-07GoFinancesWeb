const formatValue = (value: number): string => {
  return `R$ ${Intl.NumberFormat().format(value)}`;
};

export const formatDate = (value: Date): string =>
  Intl.DateTimeFormat().format(value);

export default formatValue;
