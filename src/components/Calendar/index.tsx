import React from 'react';

import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components';

import { Calendar as CustomCalendar } from 'react-native-calendars'

export function Calendar(){
    const theme = useTheme()

    return (
        <CustomCalendar
            renderArrow={( direction ) =>
                <Feather 
                    size={24}
                    color={theme.colors.text}
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_opaque,
                paddingBottom: 10,
                marginBottom: 10
            }}
        />
    )        
}