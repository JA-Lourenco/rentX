import React from 'react';

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

export function CarCard(){
    return (
        <Container>
            <CarDescription>
                <Brand>AUDI</Brand>

                <Name>RS 5 Coupé</Name>
            

                <About>
                    <Rent>
                        <Period>AO DIA</Period>

                        <Price>R$ 120</Price>
                    </Rent>

                    <Gas>
                        <GasIcon />
                    </Gas>
                </About>
            </CarDescription>

            <CarImage source={{ uri: ''}}>

            </CarImage>
        </Container>
    )
}