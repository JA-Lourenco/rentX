import React, { useEffect } from 'react';

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'

import Animated, { 
    useSharedValue, 
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container
} from './styles';

export function Splash(){
    const logoAnimation = useSharedValue(0)

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(logoAnimation.value, [0, 50], [1, 0],),
            transform: [
                {
                    translateX: interpolate(logoAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(logoAnimation.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(logoAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })

    const navigation = useNavigation<any>()

    function startApp() {
        navigation.navigate('Home')
    }

    useEffect(() => {
        logoAnimation.value = withTiming(
            50,
            {duration: 2000},
            () => {
              'worklet'
              runOnJS(startApp)()
            }
        )
    }, [])

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Animated.View style={[brandStyle, {position: 'absolute'}]}>
                <BrandSvg width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSvg width={180} height={20} />
            </Animated.View>
        </Container>
    )
}