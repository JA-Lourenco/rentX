import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    position: absolute;
    margin-top: ${getStatusBarHeight() + 31}px;
    margin-left: 24px;
`

export const CarImagesContainer = styled.View`
    margin-top: ${getStatusBarHeight() + 40}px;
`

export const CarDescription = styled.View`
    padding: 35px 24px 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Info = styled.View`

`

export const Brand = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_opaque};
`

export const Name = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
`

export const Rent = styled.View`

`

export const Period = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_opaque};
`

export const Price = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
`
