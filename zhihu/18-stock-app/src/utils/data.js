export function saveData(data) {
  return localStorage.setItem('stock-app-data', data);
}

export function getData() {
  return localStorage.getItem('stock-app-data');
}
