import { useState } from 'react'
import styled from 'styled-components/macro'

export default function AppForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    size: '' || 4,
    seed: '' || 'Web Development',
    names: '' || '',
    prefix: '' || 'HH-WEB-21-1-BR-',
  })

  return (
    <details>
      <Summary>Settings</Summary>
      <Form onSubmit={handleSubmit}>
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
      </Form>
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

const Form = styled.form`
  display: grid;
  grid-gap: 12px;
  margin-top: 5px;

  button {
    justify-self: start;
    background-color: #ff5a36;
    border: 1px solid #ffded7;
    color: white;
    border-radius: 5px;
    font-size: 100%;
    padding: 2px 6px;
    line-height: 1.5;
  }

  label {
    display: block;
  }

  input {
    display: block;
    width: 100%;
  }
`
const Summary = styled.summary`
  cursor: default;
  display: inline-block;
  border: 1px solid #aaa5;
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 12px;
`
