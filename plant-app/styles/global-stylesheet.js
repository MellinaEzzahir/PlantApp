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
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },

    plantCard: {
        width: '95%',
        marginBottom: 12,
        marginLeft: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    myPlants: {
        width: '100%',
    },

    plantCardName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    plantCardType: {
        fontSize: 14,
        marginBottom: 4,
    },

    plantCardWatering: {

    },

    plantCardSunlight: {

    },

    plantCardNotes: {

    }

});