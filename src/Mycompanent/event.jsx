import React from 'react'

export const Event = () => {
    const evn = (name) => {
        alert(`hello ${name}`);
    }
  return (
    <>
    <button onClick={function () {evn('parul')}}>Click Me</button>
    </>
  )
}
