import { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
function ListGroup({items, heading, onSelectItem}: Props){
   
    const List = styled.ul`
    list-style: none;
    padding: 0;
    `;

    interface ListItemProps{
        active: boolean;
    }

    const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? 'blue' : 'none'};
    `;


    interface Props{
        item: string[];
        heading: string;
        onSelectItem: (item: string) => void;
    }
    const [selectedIndex, setSelectedIndex] = useState(0);
    const message = items.length === 0 ? <p>No item found</p> : null;
    return (
        <>
            <h1>{heading}</h1>
            { items.length === 0 && <p>No item found</p> }
            <List className="list-group">
                {items.map((item, index) => (
                <ListItem 
                    active={selectedIndex === index}
                    className={selectedIndex === index ? 'list-group-name active' : 'list-group-name'} 
                    key={item} 
                    onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item)
                            console.log('hi');
                        }}>{item}</ListItem>
                    ))}

            </List>
        </>
        )
}

export default ListGroup;