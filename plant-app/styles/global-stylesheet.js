import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({

    screenContainer: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,

        backgroundColor: theme.colors.background,
    },

    tabBarStyle: {
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 2,
        borderTopColor: 'lightgray',
    },

    tabBarLabel: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    customHeader: {
        height: 70,
        paddingTop: 25,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    customHeaderTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    plantCard: {
        height: 150,
        width: '100%',
        margin: 10,
        backgroundColor: theme.colors.primary,
    },

    myPlants: {
        width: '100%',
    },

    plantCardName: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        height: 20,
    }

});