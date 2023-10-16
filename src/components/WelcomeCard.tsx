import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import colors from '../constants/Color'

const WelcomeCard = ({ title, content, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} resizeMode='contain' />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: WIDTH
    },
    image: {
        height: HEIGHT * 0.1,
        width: WIDTH * 0.3,
        borderRadius: WIDTH * 0.1
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.navyblue
    },
    contentText: {
        fontSize: 18,
        marginHorizontal: WIDTH * 0.1,
        textAlign: 'center',
        color: colors.lightblack
    }
})

export default WelcomeCard