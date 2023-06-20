import { MouseEvent } from "react";
import { useState } from "react";


function ListGroup({items, heading, onSelectItem}: Props){
    


    interface Props{
        item: string[];
        heading: string;
        onSelectItem: (item: string) => void;
    }
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const message = items.length === 0 ? <p>No item found</p> : null;
    return (
        <>
            <h1>{heading}</h1>
            { items.length === 0 && <p>No item found</p> }
            <ul className="list-group">
                {items.map((item, index) => (
                <li 
                    className={selectedIndex === index ? 'list-group-name active' : 'list-group-name'} 
                    key={item} 
                    onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item)
                            console.log('hi');
                        }}>{item}</li>
                    ))}

            </ul>
        </>
        )
}

export default ListGroup;