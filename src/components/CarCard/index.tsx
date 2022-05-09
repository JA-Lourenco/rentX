import React, { useState } from 'react';

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

interface CarData {
    id: string
    brand: string
    name: string
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

export interface CarCardProps {
    data: CarData
}

export function CarCard({ data }: CarCardProps){
    return (
        <Container>
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