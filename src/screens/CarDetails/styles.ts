import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';


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
    margin: 35px 24px 0;
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
    text-transform: uppercase;
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
    text-transform: uppercase;
`

export const Price = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
`

export const Details = styled.ScrollView.attrs({
    contentContainerStyles: {
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false
})`
    margin: 16px 16px 0;
`

export const Acessories = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const About = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${RFValue(25)}px;
    text-align: justify;
    margin-top: 16px;
    padding: 0 8px;
`

export const Footer = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    width: 100%;
    padding: 24px 24px ${getBottomSpace() + 24}px;
`