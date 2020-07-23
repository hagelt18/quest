export const saveProgress = (id) => {
  const data = loadData();
  data.currentClue = id;
  saveData(data);
}

export const saveName = (name) => {
  const data = loadData();
  data.name = name;
  saveData(data);
}

const defaultData = {
  name: null,
  progress: []
}

export const saveData = (data) => {
  localStorage.setItem('clue-data', data);
}

export const loadData = () => {
  const data = localStorage.getItem('clue-data');
  return data || { ...defaultData };
}
