import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import saveToLocal from '../services/saveToLocal'

export default function AppForm({ setData, data }) {
  const [isOpen, setIsOpen] = useState(!data.names)
  const [formData, setFormData] = useState({
    size: 4,
    project: data.project ?? '',
    names: data.names ?? '',
    prefix: 'HH-WEB-21-1-BR-',
  })

  useEffect(() => {
    saveToLocal('groups', formData)
  }, [formData])

  return (
    <section>
      <Summary onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        Settings
      </Summary>
      <Form isOpen={isOpen} onSubmit={handleSubmit}>
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
          Project:
          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
          />
          <small>
            If you don't set a project name, the randomized teams will be linked
            to the date.
          </small>
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
    </section>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setData(formData)
    setIsOpen(false)
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
}

const Form = styled.form`
  display: ${(props) => (props.isOpen ? 'grid' : 'none')};
  grid-gap: 12px;
  margin-top: 5px;

  button {
    background-color: #ff5a36;
    border-radius: 5px;
    border: 1px solid #ffded7;
    color: white;
    font-size: 100%;
    justify-self: start;
    line-height: 1.5;
    padding: 2px 6px;
  }

  label {
    display: block;
  }

  input {
    border-radius: 5px;
    border: 1px solid var(--blue-50);
    color: var(--blue-main);
    display: block;
    font-size: 100%;
    line-height: 1.5;
    padding: 2px 6px;
    width: 100%;
  }

  small {
    color: var(--orange-main);
    font-style: italic;
  }
`

const Summary = styled.button`
  align-items: baseline;
  background: ${(props) => (props.isOpen ? 'white' : '#eee')};
  border-radius: 5px;
  border: 1px solid var(--blue-50);
  color: inherit;
  cursor: default;
  display: flex;
  font-size: 100%;
  font-weight: normal;
  margin: 0 0 12px 0;
  padding: 2px 6px;

  &::before {
    content: '${(props) => (props.isOpen ? '▿' : '▹')}';
    width: 20px;
  }
`
