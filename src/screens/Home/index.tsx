import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import { useNavigation } from '@react-navigation/native';
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
    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation<any>()

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
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
                        Total de 12 carros
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

        </Container>
    )
}