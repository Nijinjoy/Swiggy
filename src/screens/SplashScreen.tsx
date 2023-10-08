import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Logo } from '../assets'
import colors from '../constants/Color'
// import { Images, colors } from '../constants'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Image source={Logo} resizeMode='contain' style={styles.logo} />
            <Text style={styles.logoName}>Swiggy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.navyblue
    },
    logo: {
        height: 100,
        borderRadius: 10,
        width: 100
    },
    logoName: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default SplashScreen