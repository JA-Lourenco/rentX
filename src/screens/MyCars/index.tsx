import React, { useState, useEffect } from 'react';

import { BackButton } from '../../components/BackButton';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';

import {
    Container,
    Header,
    Title,
    Paragraph
} from './styles';
import api from '../../services/api';

export function MyCars(){
    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)

    const theme = useTheme()

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    useEffect(() => {
        async function fetchMyCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1')
                setCars(response.data)
            } catch (error) {
                console.log('Screen: MyCars\nfunction:fetchMyCars\nerror', error)
            } finally {
                setLoading(false)
            }
        }

        fetchMyCars()
    }, [])

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <BackButton
                    color={theme.colors.background_secondary}
                    onPress={handleGoBack}
                />

                <Title>
                    Seus agendamentos,{'\n'}estão aqui.
                </Title>

                <Paragraph>
                    Conforto,segurança e praticidade.
                </Paragraph>
            </Header>

        </Container>
    )
}