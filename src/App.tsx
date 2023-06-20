import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App(){
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix"
];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (


    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert text="Hello World"/>
    </div>
    
  )
}

export default App;