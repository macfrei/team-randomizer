export default function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}
