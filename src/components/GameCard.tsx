import React from 'react';
import {Game, Platform} from '../hooks/useGames';
import { Card, Image, CardBody, Heading, Text} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    console.log(game, 'game');
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>  
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody> 
        </Card>
    )
}
export default GameCard;