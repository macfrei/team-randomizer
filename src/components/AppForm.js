import { useState } from 'react'
import styled from 'styled-components/macro'
import saveToLocal from '../services/saveToLocal'

export default function AppForm({ setData, data }) {
  const [toggle, setToggle] = useState(!data.names)
  const [formData, setFormData] = useState({
    size: 4,
    project: '',
    names: '',
    prefix: 'HH-WEB-21-1-BR-',
  })

  return (
    <section>
      <Summary onClick={() => setToggle(!toggle)} toggle={toggle}>
        Settings
      </Summary>
      <Form toggle={toggle} onSubmit={handleSubmit}>
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
        </label>
        <small>
          If you don't set a project name, the randomized teams will be linked
          to the date.
        </small>
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
    saveToLocal('groups', formData)
    setData(formData)
    event.target.reset()
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
}

const Form = styled.form`
  display: ${(props) => (props.toggle ? 'grid' : 'none')};
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

  small {
    color: var(--orange-main);
    font-style: italic;
  }
`

const Summary = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: default;
  border: 1px solid var(--blue-50);
  background: ${(props) => (props.toggle ? 'white' : '#eee')};
  padding: 2px 6px;
  border-radius: 4px;
  margin: 0 0 12px 0;
  font-weight: normal;
  font-size: 100%;
  width: 90px;

  &::before {
    content: '${(props) => (props.toggle ? '▿ ' : '▹ ')}';
  }
`
