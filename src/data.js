export const getData = async () => {
  const storageData = localStorage.getItem("contacts");
  if (!storageData) {
    const tmp = await fetch("https://demo.sibers.com/users");
    const contacts = await tmp.json();
    localStorage.setItem("contacts", JSON.stringify(contacts));
    return contacts;
  } else {
    return JSON.parse(storageData);
  }
};

export const setData = (data) => {
  localStorage.setItem("contacts", JSON.stringify(data));
};
