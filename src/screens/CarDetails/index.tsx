import React from 'react';

import { CarDTO } from '../../dtos/CarDTO';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated'

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
    Accessories,
    About,
    Footer
} from './styles';

interface Params {
    car: CarDTO
}

export function CarDetails(){
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    const scrollY = useSharedValue(0)
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [235, 70],
                Extrapolate.CLAMP
            )
        }
    })

    const imageSliderStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(scrollY.value, 
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP    
            )
        }
    })

    function handleConfirmRental() {
        navigation.navigate('Scheduling', { car })
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />

            <Animated.View
                style={[headerStyleAnimation]}
            >
                <Header>
                    <BackButton 
                        onPress={handleGoBack}
                    />
                </Header>

                <CarImagesContainer>
                    <Animated.View style={imageSliderStyleAnimation}>
                        <ImageSlider 
                            imagesUrl={ car.photos } 
                        />
                    </Animated.View>
                </CarImagesContainer>
            </Animated.View>

            <CarDescription>
                <Info>
                    <Brand>{ car.brand }</Brand>

                    <Name>{ car.name }</Name>
                </Info>

                <Rent>
                    <Period>{ car.rent.period }</Period>

                    <Price>R$ { car.rent.price }</Price>
                </Rent>
            </CarDescription>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Accessories>
                    {
                        car.accessories.map(accessory => 
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)} 
                            />    
                        )
                    }
                </Accessories>

                <About>
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                </About>
            </Animated.ScrollView>

            <Footer>
                <Button 
                    title='Escolher período do aluguel'
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    )
}