import React from 'react'

const WelcomeMessage = () => {
    const myName = 'Pytech';
    const multiply = (a, b) => a *b
  return <div>
    <h1>Hello world my name is {myName}</h1>
    <p>2 * 4 = {multiply(2,4)}</p>
  </div>
}

export default WelcomeMessage