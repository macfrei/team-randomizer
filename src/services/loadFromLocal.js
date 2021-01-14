export default function fromFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error)
  }
}
