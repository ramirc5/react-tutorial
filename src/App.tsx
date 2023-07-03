import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React from "react";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App(){
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix"
];

  const [visible, setVisible] = useState(false);


  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (


    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      {visible && <Alert onClose={() => setVisible(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setVisible(true)}></Button>
      <BsCalendarFill />
      <Button color="secondary">Hey</Button>
      <Like />
    </div>
    
  )
}

export default App;