import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, StatusBar } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';

import {
    Container,
    Header,
    CarImagesContainer,
    CarDescription,
    Info,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Details,
    Accessories,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles';

interface RentalPeriod {
    start: string
    end: string
}

interface Params {
    car: CarDTO
    dates: string[]
}

export function SchedulingDetails(){
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme() 

    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car, dates } = route.params as Params

    const rentTotal = Number(dates.length * car.rent.price)

    async function handleConfirmRentalSummary() {
        const schedulingByCar = await api.get(`/schedules_bycars/${car.id}`)

        const unavailable_dates = [
            ...schedulingByCar.data.unavailable_dates,
            ...dates
        ]

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
        .then(() => navigation.navigate('SchedulingComplete'))
        .catch(() => Alert.alert('Não foi possível confirmar o agendamento.'))
    }

    function handleGoBack() {
        navigation.goBack()
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end:format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
        })
    }, [])

    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <BackButton 
                    onPress={handleGoBack}
                />
            </Header>

            <CarImagesContainer>
                <ImageSlider 
                    imagesUrl={ car.photos } 
                />
            </CarImagesContainer>

            <CarDescription>
                <Info>
                    <Brand>{ car.brand }</Brand>

                    <Name>{ car.name }</Name>
                </Info>

                <Rent>
                    <Period>{ car.rent.period }</Period>

                    <Price>R$ {car.rent.price }</Price>
                </Rent>
            </CarDescription>

            <Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />

                        ))
                    }
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.background_secondary}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{ rentalPeriod.start }</DateValue>
                    </DateInfo>

                    <Feather 
                        name='chevron-right'
                        size={RFValue(24)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{ rentalPeriod.end }</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>

                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${ car.rent.price } x${ dates.length } diárias`}</RentalPriceQuota>
                        
                        <RentalPriceTotal>R$ { rentTotal }</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Details>

            <Footer>
                <Button 
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleConfirmRentalSummary}
                />
            </Footer>


        </Container>
    )
}