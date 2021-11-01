import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import BrandButton from '../../components/BrandButton';
import { setSetAccessToken } from '../../store/actions/auth.actions';

type AccountScreenProps = {
    navigation: any,
}

const { width, height } = Dimensions.get('window');

const AccountScreen : React.FC<AccountScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { theme } : any = useTheme();

    const handleLogOut = async () => {
        await AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => {
                console.log("Cleared Data");
            })
        dispatch(setSetAccessToken(null));
        navigation.navigate("login");
    };

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            
            <BrandButton 
                style={styles.logOut}
                title="Log Out"
                onPress={handleLogOut}
                color={'#fff'}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        display: 'flex',
        alignItems: 'center',
    },
    logOut: {
        marginTop: 'auto',
        marginBottom: 125,
    }
})

export default AccountScreen; 