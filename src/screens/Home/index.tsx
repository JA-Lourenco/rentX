import React from 'react';

import { CarCard } from '../../components/CarCard';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg'

import {
    Container,
    Header,
    HeaderContent,
    CarAmount
} from './styles'

export function Home(){
    const carDataOne = {
        brand: 'MAD MAX',
        name: 'Magnum Opus',
        rent: {
            period: 'AO DIA',
            price: 120
        },
        thumbnail: 'https://www.pikpng.com/pngl/b/223-2238897_mad-max-apocalypse-cool-cars-vehicle-mad-max.png'
    }

    const carDataTwo = {
        brand: 'MAD MAX',
        name: 'Peacemaker',
        rent: {
            period: 'AO DIA',
            price: 200
        },
        thumbnail: 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/car4.png?resize=480:*'
    }

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <HeaderContent>
                    <LogoSvg 
                        width={RFValue(108)} 
                        height={RFValue(12)} 
                    />

                    <CarAmount>
                        Total de 12 carros
                    </CarAmount>
                </HeaderContent>
            </Header>

            <CarCard data={carDataOne} />
            <CarCard data={carDataTwo} />

        </Container>
    )
}