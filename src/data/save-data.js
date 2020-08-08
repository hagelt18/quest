import clues from "./clues";

export const saveProgress = (id) => {
  const data = loadData();
  if (data.completedClues.some(c => c === id)) {
    return;
  }

  data.currentClue = id;
  data.completedClues = [...data.completedClues, id];
  saveData(data);

}

export const getLatestClueId = () => {
  const data = loadData();
  return data.currentClue;
}
export const getNextClueId = () => {
  const data = loadData();
  const currentClueIndex = clues.findIndex(c => c.id === data.currentClue);
  if (clues.length > currentClueIndex + 1) {
    return clues[currentClueIndex + 1].id;
  }
  return clues[currentClueIndex].id;
}

export const saveName = (name) => {
  const data = loadData();
  data.name = name;
  saveData(data);
}

const defaultData = {
  name: null,
  progress: [],
  completedClues: [],
  instrumentUnlocked: false,
}

export const saveData = (data) => {
  localStorage.setItem('clue-data', JSON.stringify(data));
}

export const loadData = () => {
  const data = JSON.parse(localStorage.getItem('clue-data') || '{}');
  return { ...defaultData, ...data };
}
