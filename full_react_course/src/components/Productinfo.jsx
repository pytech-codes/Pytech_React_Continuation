import React from 'react'

const Productinfo = () => {
    const Product ={
        name: 'Laptop',
        price: 1200,
        availability:'in stock',
    };
    const numbers = [1,2,3,4,5];
    const usersInfo = [
  {
    "username": "techsparrow",
    "email": "techsparrow91@example.com",
    "location": "Toronto, Canada"
  },
  {
    "username": "lunarbyte",
    "email": "lunar.byte@example.net",
    "location": "Berlin, Germany"
  },
  {
    "username": "jade_wolf",
    "email": "jadewolf24@example.org",
    "location": "Nairobi, Kenya"
  },
  {
    "username": "cobaltstream",
    "email": "cobaltstream@example.com",
    "location": "Sydney, Australia"
  },
  {
    "username": "emberdash",
    "email": "emberdash77@example.io",
    "location": "São Paulo, Brazil"
  },
  {
    "username": "neon_harbor",
    "email": "neonharbor@example.net",
    "location": "Tokyo, Japan"
  },
  {
    "username": "pixel_forger",
    "email": "pforger@example.com",
    "location": "Cape Town, South Africa"
  },
  {
    "username": "frostypulse",
    "email": "frostypulse@example.org",
    "location": "London, United Kingdom"
  },
  {
    "username": "nightcircuit",
    "email": "nightcircuit@example.io",
    "location": "Dubai, UAE"
  },
  {
    "username": "wanderingquill",
    "email": "wquill@example.net",
    "location": "New York, USA"
  }
]

  return (
    <div>
        <h1>Products Info</h1>
        <span>The name of this product is: {Product.name} and its selling at {Product.price}$ i asked if it is availabe and they said it is {Product.availability}</span>
<h2>This are list of numbers in a list</h2>
{numbers.map(numbers => (
    <ul key={numbers}>
        <li>{numbers}</li>
    </ul>
))}
<h2>List Of Random users</h2>
{ usersInfo.map(users => (
    <ul key={numbers}>
<li>{users.username}</li>
<li>{users.email}</li>
<li>{users.location}</li>
    </ul>
)) }
    </div>
  )
}

export default Productinfo