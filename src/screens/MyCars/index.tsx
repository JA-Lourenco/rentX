import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { CarCard } from '../../components/CarCard';
import { BackButton } from '../../components/BackButton';
import { LoadAnimated } from '../../components/LoadAnimated';

import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import AntDesign from 'react-native-vector-icons/AntDesign'

import {
    Container,
    Header,
    Title,
    Paragraph,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate
} from './styles';

interface CarProps {
    id: string
    user_id: string
    startDate: string
    endDate: string
    car: CarDTO
}

export function MyCars(){
    const [cars, setCars] = useState<CarProps[]>([])
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
                console.log(response.data)
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
                    Seus agendamentos,{'\n'}est??o aqui.
                </Title>

                <Paragraph>
                    Conforto,seguran??a e praticidade.
                </Paragraph>
            </Header>

            {
                loading ? <LoadAnimated /> :
            
                <Content>
                    <Appointments>
                        <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                        <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                    </Appointments>

                    <FlatList 
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => 
                            <CarWrapper>
                                <CarCard data={item.car}/>

                                <CarFooter>
                                    <CarFooterTitle>Per??odo</CarFooterTitle>

                                    <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>

                                        <AntDesign 
                                            name='arrowright'
                                            size={20}
                                            color={theme.colors.title}
                                            style={{ marginHorizontal: 10}}
                                        />
                                        
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                    </CarFooterPeriod>
                                </CarFooter>
                            </CarWrapper>
                        }
                    />
                </Content>
            }
        </Container>
    )
}