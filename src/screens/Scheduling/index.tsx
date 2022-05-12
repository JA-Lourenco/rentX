import React, { useState } from 'react';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';

import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DayProps } from '../../components/Calendar';
import { MarkedDateProps } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg'

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles';

export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)

    const theme = useTheme()

    const navigation = useNavigation<any>()

    function handleConfirmScheduling() {
        navigation.navigate('SchedulingDetails')
    }

    function handleGoBack() {
        navigation.goBack()
    }

    function handleSelectedDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date

        if(start.timestamp > end.timestamp) {
            start = end
            end = start
        }

        setLastSelectedDate(end)

        const interval = generateInterval(start, end)

        setMarkedDates(interval)
    }

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            
            <Header>
                <BackButton 
                    onPress={handleGoBack}
                    color={theme.colors.background_secondary}
                />

                <Title>
                    Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>

                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>

                        <DateValue selected={false}>
                            18/06/2021
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleSelectedDate}
                />
            </Content>

            <Footer>
                <Button 
                    title='Confirmar'
                    onPress={handleConfirmScheduling}
                />
            </Footer>
            
        </Container>
    )
}