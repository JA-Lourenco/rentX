import React from 'react';

import { CarDTO } from '../../dtos/CarDTO';
import { TouchableOpacityProps } from 'react-native';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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

interface CarCardProps extends TouchableOpacityProps {
    data: CarDTO
}

export function CarCard({ data, ...rest }: CarCardProps){
    const MotorIcon = getAccessoryIcon(data.fuel_type)

    return (
        <Container {...rest}>
            <CarDescription>
                <Brand>{ data.brand }</Brand>

                <Name>{ data.name }</Name>
            

                <About>
                    <Rent>
                        <Period>{ data.rent.period }</Period>

                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Gas>
                        <MotorIcon />
                    </Gas>
                </About>
            </CarDescription>

            <CarImage 
                source={{ uri: data.thumbnail }} 
                resizeMode='contain'
            />
        </Container>
    )
}