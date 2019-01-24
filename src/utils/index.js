import tailWind from '../../tailwind.config';

export const addFields = (array, index = 0, fields) => {
  const clone = array.slice(0);

  clone.splice(index, 0, ...fields);

  return clone;
};

export const colors = Object.keys(tailWind.colors);
