import React, { useState } from 'react';

import { CarCard } from '../../components/CarCard';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LogoSvg from '../../assets/logo.svg'

import {
    Container,
    Header,
    HeaderContent,
    CarAmount,
    CarList
} from './styles'

export interface CarData {
    id: string
    brand: string
    name: string
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

export function Home(){
    const [carData, setCarData] = useState<CarData[]>([
        {   
            id: '1',
            brand: 'MAD MAX',
            name: 'Interceptor',
            rent: {
                period: 'AO DIA',
                price: 120
            },
            thumbnail: 'https://www.pikpng.com/pngl/b/223-2238897_mad-max-apocalypse-cool-cars-vehicle-mad-max.png'
        },
        {   
            id: '2',
            brand: 'MAD MAX',
            name: 'Peacemaker',
            rent: {
                period: 'AO DIA',
                price: 200
            },
            thumbnail: 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/car4.png?resize=480:*'
        },
        {   
            id: '3',
            brand: 'MAD MAX',
            name: 'Magnum Opus',
            rent: {
                period: 'AO DIA',
                price: 310
            },
            thumbnail: 'https://i.pinimg.com/originals/78/cb/c4/78cbc468a0c82d943d9ea428d27d7a57.png'
        },
        {   
            id: '4',
            brand: 'MAD MAX',
            name: 'Interceptor',
            rent: {
                period: 'AO DIA',
                price: 120
            },
            thumbnail: 'https://www.pikpng.com/pngl/b/223-2238897_mad-max-apocalypse-cool-cars-vehicle-mad-max.png'
        },
        {   
            id: '5',
            brand: 'MAD MAX',
            name: 'Peacemaker',
            rent: {
                period: 'AO DIA',
                price: 200
            },
            thumbnail: 'https://hips.hearstapps.com/autoweek/assets/s3fs-public/car4.png?resize=480:*'
        },
        {   
            id: '6',
            brand: 'MAD MAX',
            name: 'Magnum Opus',
            rent: {
                period: 'AO DIA',
                price: 310
            },
            thumbnail: 'https://i.pinimg.com/originals/78/cb/c4/78cbc468a0c82d943d9ea428d27d7a57.png'
        },
    ])

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

            <CarList 
                data={carData}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => <CarCard data={item} />}
            />

        </Container>
    )
}