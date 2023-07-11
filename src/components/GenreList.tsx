import React from 'react';
import useGenres, {Genre} from '../hooks/useGenres';
import {List, ListItem, Button, ListIcon, UnorderedList, HStack, Image, Text, Spinner, Heading} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}


const GenreList = ({selectedGenre, onSelectGenre}) => {
    const {data, loading, error} = useGenres();
    if (error) {
        return null;
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <>
            <Heading fontSize='2xl' marginBottom={5} marginTop={5}>Genres</Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id}>
                        <HStack>
                            <Image 
                            boxSize='32px' 
                            borderRadius={8}
                            paddingY='5px' 
                            src={getCroppedImageUrl(genre.image_background)} 
                            alt={genre.name} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name} </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}
export default GenreList;