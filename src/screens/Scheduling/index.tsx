import React, { useState } from 'react';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';

import { useTheme } from 'styled-components';
import { StatusBar, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { DayProps } from '../../components/Calendar';
import { MarkedDateProps } from '../../components/Calendar';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';

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

interface RentalPeriod {
    startFormatted: string
    endFormatted: string
}

interface Params {
    car: CarDTO
}

export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme()

    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    function handleConfirmScheduling() {
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
            Alert.alert("Selecione o período para prosseguir com o aluguel.")
        } else {
            navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            })
        }
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

        const firstDate = Object.keys(interval)[0]
        const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy')
        })
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

                        <DateValue selected={!!rentalPeriod.startFormatted}>
                            { rentalPeriod.startFormatted }
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>

                        <DateValue selected={!!rentalPeriod.endFormatted}>
                        { rentalPeriod.endFormatted }
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
                    disabled={rentalPeriod.startFormatted ? false : true}
                />
            </Footer>
            
        </Container>
    )
}