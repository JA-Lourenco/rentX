import React from 'react';

import Feather from 'react-native-vector-icons/Feather'
import ptBR from './localeConfig';
import { useTheme } from 'styled-components';

import { 
    Calendar as CustomCalendar,
    LocaleConfig,
    CalendarProps
} from 'react-native-calendars'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export interface MarkedDateProps {
    [date: string]: {
      color: string;
      textColor: string;
      disabled?: boolean;
      disableTouchEvents?: boolean;
    };
  }
  
export interface DayProps {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
  }

export function Calendar({ markedDates, onDayPress }: CalendarProps){
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

            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontFamily: theme.fonts.secondary_600,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={String(new Date())}
            markingType='period'
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    )        
}