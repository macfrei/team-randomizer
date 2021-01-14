import { useState } from 'react'

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    size: '' || 4,
    seed: '' || 'Web Development',
    names: '' || '',
    prefix: '' || 'HH-WEB-21-1-BR-',
  })

  return (
    <details>
      <summary>Settings</summary>
      <form onSubmit={handleSubmit}>
        <label>
          Team size:
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </label>
        <label>
          Seed:
          <input
            type="text"
            name="seed"
            value={formData.seed}
            onChange={handleChange}
          />
        </label>
        <label>
          All names:
          <input
            type="text"
            name="names"
            value={formData.names}
            onChange={handleChange}
          />
        </label>
        <label>
          Prefix team:
          <input
            type="text"
            name="prefix"
            value={formData.prefix}
            onChange={handleChange}
          />
        </label>
        <button>save</button>
      </form>
    </details>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(formData)
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
}
