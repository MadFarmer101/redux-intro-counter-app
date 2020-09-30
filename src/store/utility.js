export const updateObject = (oldOBject, updatedValue) => {
  return {
    ...oldOBject,
    ...updatedValue,
  };
}