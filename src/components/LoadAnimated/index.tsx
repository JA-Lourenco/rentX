import React from 'react';

import LottieView from 'lottie-react-native'

import carLoading from '../../assets/car_loading.json'

import {
    Container
} from './styles';

export function LoadAnimated(){
    return (
        <Container>
            <LottieView 
                source={carLoading}
                style={{ height: 200 }}
                resizeMode='contain'
                autoPlay
                loop
            />
        </Container>
    )
}