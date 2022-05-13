import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 273px;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    padding: ${getStatusBarHeight() + 30}px 25px 25px;
`

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};
    margin-top: 22px;
`

export const Paragraph = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.background_secondary};
    margin-top: 18px;
`