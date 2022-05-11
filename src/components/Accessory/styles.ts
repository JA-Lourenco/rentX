import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    min-width: 26%;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    justify-content: center;
    align-items: center;
    margin: 8px;
`;

export const Name = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    margin-top: 12px;
`