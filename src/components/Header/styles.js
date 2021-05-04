import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        marginTop: 20,
    },
});

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
`;
