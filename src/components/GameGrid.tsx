import React, {useState, useEffect} from 'react';
import apiClient from '../services/api-clients';
import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {

    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}) => {
    const {data, error, loading} = useGames(gameQuery);
    console.log(data, 'hmmmmm games wooooooo');
    const skeletons = [1,2,3,4,5,6];
    if (error) {
        return <Text>{error}</Text>
    }
    return (
        <>
            {error && <div>{error}</div>}
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4}} padding='10px' spacing={6}>
                {loading && skeletons.map((skeleton) => ( 
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}
export default GameGrid;