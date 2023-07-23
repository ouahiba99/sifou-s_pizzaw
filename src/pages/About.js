import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' 
        style={{backgroundImage:`url(${multiplePizzas})`}}
        ></div>
        <div className='aboutBottom'>
          <h1>ABOUT US</h1>
          
          <p>Welcome to Sifou's Pizzeria!

At Sifou's Pizzeria, we believe that great food brings people together. Established in 1998, our family-owned pizzeria has been serving the community for over two decades, delighting taste buds and creating memorable dining experiences. Located in the heart of the city, we have become a beloved destination for pizza lovers of all ages.

Our commitment to quality and authenticity sets us apart. From the moment you step through our doors, you'll be greeted by the aroma of freshly baked dough and the warm smiles of our friendly staff. Our passionate chefs combine traditional Italian recipes with innovative flavors, using only the finest ingredients to craft each mouthwatering pizza.

Whether you're craving a classic Margherita, a meat lover's delight, or a gourmet vegetarian masterpiece, we have a pizza to suit every palate. We take pride in our diverse menu, offering a wide range of toppings and specialty combinations. Our hand-tossed dough is made from scratch daily, and our signature tomato sauce is bursting with the flavors of sun-ripened tomatoes and aromatic herbs.

But our dedication to excellence doesn't stop at our pizzas. We also offer a variety of appetizers, salads, and pasta dishes that showcase the same commitment to quality and taste. From our crispy garlic breadsticks to our hearty lasagna, every dish is crafted with love and attention to detail.

At Sifou's Pizzeria, we understand that great food should be enjoyed in a welcoming and comfortable atmosphere. Our cozy dining area is designed to make you feel right at home, whether you're enjoying a casual lunch with friends, a family dinner, or a romantic evening for two. We also offer convenient takeout and delivery services, ensuring that you can savor our delicious pizzas wherever you are.

We value our customers and strive to provide exceptional service with every visit. Our dedicated team is always ready to assist you with any special requests or dietary preferences, ensuring that your dining experience exceeds your expectations. We believe that food should be an experience that nourishes both the body and the soul, and we are committed to making every visit to Sifou's Pizzeria a memorable one.

Thank you for choosing Sifou's Pizzeria. We look forward to serving you and sharing our love for authentic, mouthwatering pizzas. Come join us and indulge in a slice of pizza heaven!

Buon appetito!
The Sifou's Pizzeria Team</p>
          
        </div>
    </div>
  )
}

export default About