import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 26,
    },

    customHeaderTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },

    myPlants: {
        width: '100%',
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

    plantCardName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    plantCardType: {
        fontSize: 14,
        marginBottom: 4,
    },

    plantCardWatering: {},
    plantCardSunlight: {},
    plantCardNotes: {},

    loginTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        color: theme.colors.secondary,
        textAlign: 'center',
    },

    loginUsername: {
        width: '100%',
        padding: 14,
        marginBottom: 16,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: theme.colors.primary,
        backgroundColor: '#fff',
        fontSize: 16,
        color: theme.colors.text,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },

    loginPassword: {
        width: '100%',
        padding: 14,
        marginBottom: 24,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: theme.colors.primary,
        backgroundColor: '#fff',
        fontSize: 16,
        color: theme.colors.text,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },

    loginSubmit: {
        backgroundColor: theme.colors.secondary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 16,
        shadowColor: theme.colors.copperBrown,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 16,
    },

    loginSubmitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    footerText: {
        marginTop: 12,
        fontSize: 14,
        color: theme.colors.secondary,
        textAlign: 'center',
    },
});