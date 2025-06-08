import { StyleSheet, Dimensions } from 'react-native';
import { useContext } from 'react';

const screenWidth = Dimensions.get('window').width;
const isPhoneSize = screenWidth < 600;

export const createStyles = (theme) => StyleSheet.create({
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
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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
        width: isPhoneSize ? '100%' : 500,
        padding: 14,
        marginBottom: 16,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: theme.colors.primary,
        backgroundColor: '#fff',
        fontSize: 16,
        color: theme.colors.text,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        elevation: 1,
    },

    loginPassword: {
        width: isPhoneSize ? '100%' : 500,
        padding: 14,
        marginBottom: 24,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: theme.colors.primary,
        backgroundColor: '#fff',
        fontSize: 16,
        color: theme.colors.text,
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        elevation: 1,
    },

    loginSubmit: {
        backgroundColor: theme.colors.secondary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 16,
        boxShadow: '0px 3px 4px theme.colors.copperBrownShadow',
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

    backText: {
        marginTop: 12,
        fontSize: 14,
        color: theme.colors.secondary,
        textAlign: 'center',
    },

    backTextPress: {
        position: 'absolute',
        top: 10,
        left: 10,
    },

    wrongSignUpInfo: {
        color: '#d9534f',
        marginBottom: 12,
        marginLeft: 4,
        fontSize: 14,
    },
});