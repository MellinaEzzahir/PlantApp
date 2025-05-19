import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({

    screenContainer: {
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
    }

});