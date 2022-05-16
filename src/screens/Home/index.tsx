import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import LogoSvg from '../../assets/logo.svg'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    Container,
    Header,
    HeaderContent,
    CarAmount,
    CarList,
    MyCarsButton
} from './styles'

export function Home(){
    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()

    const theme = useTheme()

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

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons 
                    name='ios-car-sport'
                    size={32}
                    color={theme.colors.background_secondary}
                />
            </MyCarsButton>

        </Container>
    )
}