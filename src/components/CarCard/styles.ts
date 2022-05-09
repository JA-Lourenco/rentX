import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    width: 100%;
    height: 126px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-bottom: 16px;
`;

export const CarDescription = styled.View`
    
`

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_opaque};
    text-transform: uppercase;
`

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
`

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`

export const Rent = styled.View`
    margin-right: 26px;
`

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_opaque};
    text-transform: uppercase;
`

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.main};
`

export const Gas = styled.View`

`

export const CarImage = styled.Image`
    width: 160px;
    height: 92px;
`