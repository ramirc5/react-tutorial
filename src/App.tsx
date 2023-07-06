import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React from "react";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import styled from "styled-components";
import { set } from "immer/dist/internal";

const ExpandableText = styled.p`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

${({ maxChars }) =>
  maxChars &&
  `
  max-width: ${maxChars}ch;
`}
`


function App(){
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix"
];
  const [chars, setChars] = useState(10);
  const [show, setShow] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player:{
      name: "Player 1",
    },
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Italian',
    toppings: ['Mushrooms'],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {id: 1, name: 'Pizza', quantity: 1},
      {id: 2, name: 'Burger', quantity: 2},
    ],
});


const handleQuantity = () => {
  setCart({...cart, items: cart.items.map((item) => {item.id === 1 ? {...item, quantity: item.quantity + 1} : item})})
}

  const handlePizza = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Pepperoni']})
  }


  const handleClick = () => {
    setGame({...game, player: {...game.player, name: "Cristian"}})
  }

  const handleExpand = () => {
    setShow(!show);
    if (chars === 10) {
      setChars(1000);
    } else {
      setChars(10);
    }
  }


  return (


    <>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handlePizza}>Click Here for another topping</button>
      <button onClick={handleQuantity}>Click Here for another quantity</button>
      <p>{game.player.name}</p>
      <h1>{cart.items[0].quantity}</h1>

      <h2>{pizza.toppings}</h2>

      <ExpandableText maxChars={chars}>

1. Miserere mei, Deus, secundum magnam misericordiam tuam;
   et secundum multitudinem miserationum tuarum, dele iniquitatem meam.

2. Amplius lava me ab iniquitate mea,
   et a peccato meo munda me.

3. Quoniam iniquitatem meam ego cognosco,
   et peccatum meum contra me est semper.

4. Tibi soli peccavi, et malum coram te feci,
   ut iustificeris in sermonibus tuis et vincas cum iudicaris.

5. Ecce enim in iniquitatibus conceptus sum,
   et in peccatis concepit me mater mea.

6. Ecce enim veritatem dilexisti;
   incerta et occulta sapientiae tuae manifestasti mihi.

7. Asperges me hyssopo, et mundabor;
   lavabis me, et super nivem dealbabor.

8. Auditui meo dabis gaudium et laetitiam,
   et exsultabunt ossa humiliata.

9. Averte faciem tuam a peccatis meis,
   et omnes iniquitates meas dele.

10. Cor mundum crea in me, Deus,
    et spiritum rectum innova in visceribus meis.

11. Ne proiicias me a facie tua,
    et spiritum sanctum tuum ne auferas a me.

12. Redde mihi laetitiam salutaris tui,
    et spiritu principali confirma me.

13. Docebo iniquos vias tuas,
    et impii ad te convertentur.

14. Libera me de sanguinibus, Deus, Deus salutis meae,
    et exsultabit lingua mea iustitiam tuam.

15. Domine, labia mea aperies,
    et os meum annuntiabit laudem tuam.

16. Quoniam si voluisses sacrificium, dedissem utique;
    holocaustis non delectaberis.

17. Sacrificium Deo spiritus contribulatus,
    cor contritum et humiliatum, Deus, non despicies.

18. Benigne fac, Domine, in bona voluntate tua Sion,
    ut aedificentur muri Ierusalem.

19. Tunc acceptabis sacrificium iustitiae, oblationes et holocausta;
    tunc inponent super altare tuum vitulos. 
    </ExpandableText>
    <button onClick={handleExpand}>{show ? 'Less' : 'More'}</button>
    </>
    
  )
}

export default App;