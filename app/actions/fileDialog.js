type actionType = {
  type: string,
  selectedFilename: string
};

export const OPEN_FILE = 'OPEN_FILE';

export function open(selectedFilename) {
  return {
    type: OPEN_FILE, selectedFilename
  };
}