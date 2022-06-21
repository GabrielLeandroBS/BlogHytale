import { MONTHS } from '../utils/months';

export default function useFormatData(date) {
  const getMonths = MONTHS;
  const getNewDate = new Date(date);

  const data = `${getNewDate.getDate()} ${
    getMonths[getNewDate.getMonth()]
  } de ${getNewDate.getFullYear()}`;

  return [data];
}
