import { Platform } from "../hooks/useGames";
import { Text, Icon, HStack } from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone} from 'react-icons/md';
import { SiNintendo} from 'react-icons/si';
import { BsGlobe} from 'react-icons/bs';

interface Props{
    platform: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap = { 
        'pc': FaWindows,
        'playstation': FaPlaystation,
        'xbox': FaXbox,
        'ios': FaApple,
        'mac': FaApple,
        'linux': FaLinux,
        'android': FaAndroid,
        'nintendo': SiNintendo,
        'web': BsGlobe,
        'iphone': MdPhoneIphone,
    }
    return (
        <HStack marginY={1}>
        {platforms.map((platform) => (
                    <Icon key={platform.id} as={iconMap[platform.slug]}>{platform.name}</Icon>    
                ))} 
        </HStack>
    )
}
export default PlatformIconList;