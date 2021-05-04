import React from 'react';
import {Image} from 'react-native';
import {Container, style} from './styles';
import Logo from '../../assets/logo.png'


const Header = () => {
    return (
        <Container>
                <Image style={style.image} source={Logo} />
        </Container>
    )
}

export default Header;