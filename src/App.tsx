import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";
import Button from "./components/Button";
import React from "react";
import { useState } from "react";

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

    </div>
    
  )
}

export default App;