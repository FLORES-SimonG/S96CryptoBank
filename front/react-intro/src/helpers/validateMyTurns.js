
export const validateDate = (date) => {
  
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (regex.test(date)) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
  return null;
};
  
  export const validateTime = (time) => {

    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(time);
  };
  

  export const convertDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };