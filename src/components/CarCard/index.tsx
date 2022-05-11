import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';

import GasIcon from '../../assets/gasoline.svg'

import {
    Container,
    CarDescription,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Gas,
    CarImage
} from './styles';

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

interface CarCardProps extends TouchableOpacityProps {
    data: CarData
}

export function CarCard({ data, ...rest }: CarCardProps){
    return (
        <Container {...rest}>
            <CarDescription>
                <Brand>{data.brand}</Brand>

                <Name>{data.name}</Name>
            

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>

                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Gas>
                        <GasIcon />
                    </Gas>
                </About>
            </CarDescription>

            <CarImage 
                source={{ uri: data.thumbnail}} 
                resizeMode='contain'
            />
        </Container>
    )
}