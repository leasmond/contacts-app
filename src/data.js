export const getDataFromServer = async () => {
  const tmp = await fetch("https://demo.sibers.com/users");
  return tmp.json();
};
