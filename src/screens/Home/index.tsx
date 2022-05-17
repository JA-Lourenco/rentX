import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import LogoSvg from '../../assets/logo.svg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PanGestureHandler } from 'react-native-gesture-handler'

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring
} from 'react-native-reanimated'

import {
    Container,
    Header,
    HeaderContent,
    CarAmount,
    CarList
} from './styles'

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity)

export function Home(){
    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation<any>()

    const theme = useTheme()

    const positionX = useSharedValue(0)
    const positionY = useSharedValue(0)

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value }
            ]
        }
    })

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: any) {
            ctx.positionX = positionX.value
            ctx.positionY = positionY.value
        },
        onActive(event, ctx: any) {
            positionX.value = ctx.positionX + event.translationX
            positionY.value = ctx.positionY + event.translationY
        },
        onEnd() {
            positionX.value = withSpring(0)
            positionY.value = withSpring(0) 
        }
    })

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars')
                setCars(response.data)
                
            } catch (error) {
                console.log('Screen: Home\nfunction:fetchCars\nerror', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
    }, [])

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
                        Total de {cars.length} carros
                    </CarAmount>
                </HeaderContent>
            </Header>

            {
                loading ? <Load /> :

                <CarList 
                    data={cars}
                    keyExtractor={ item => item.id }
                    renderItem={({ item }) => 
                        <CarCard 
                            data={item} 
                            onPress={() => handleCarDetails(item)} 
                        />
                    }
                />
            }

            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        myCarsButtonStyle,
                        {
                            position: 'absolute',
                            bottom: 13,
                            right: 22
                        }
                    ]}
                >
                    <ButtonAnimated 
                        onPress={handleOpenMyCars}
                        style={styles.button}
                    >
                        <Ionicons 
                            name='ios-car-sport'
                            size={32}
                            color={theme.colors.background_secondary}
                        />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DC1637'
    }
})