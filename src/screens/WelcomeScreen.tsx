import { View, Text, StatusBar, StyleSheet, FlatList, LayoutAnimation, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import colors from '../constants/Color'
import { WelcomeCard, Separator } from '../components'
import { Logo } from '../assets'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import General from '../constants/General'

// const WelcomeFlatlist = [
//     {
//         id: 1,
//         image: Logo,
//         title: 'Discover Places Near You',
//         content: 'Taste your favourite Dishes from our paradises'
//     },
//     {
//         id: 2,
//         image: Logo,
//         title: "Discover Your Favourite",
//         content: 'We will provide you the most favourite dishes and orders'
//     },
//     {
//         id: 3,
//         image: Logo,
//         title: 'Fastest Delivery',
//         content: 'We provide fastest delivery using our partners.No matter you paid online'
//     }
// ]

const pageStyle = isActive =>
    isActive
        ? styles.page
        : { ...styles.page, backgroundColor: colors.cream };

const Pagination = ({ index }) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
                i === index ? (
                    <View style={pageStyle(true)} key={i} />
                ) : (
                    <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    );
};

const WelcomeScreen = () => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0)
    const welcomeList = useRef()
    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.purewhite}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <Separator height={HEIGHT * 0.06} />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode='never'
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    renderItem={({ item }) => <WelcomeCard {...item} />}
                />
            </View>
            <Separator height={HEIGHT * 0.15} />
            <Pagination index={welcomeListIndex} />
            <Separator height={HEIGHT * 0.07} />
            {
                welcomeListIndex === 2 ? (
                    <TouchableOpacity
                        style={styles.gettingStartedButton}
                        activeOpacity={0.8}
                      /*   onPress={() => navigate()} */>
                        <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ marginLeft: 10 }}
                            onPress={() => welcomeList.current.scrollToEnd()}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.8}
                            onPress={() => pageScroll()}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.purewhite
    },
    welcomeListContainer: {
        height: HEIGHT * 0.5
    },
    pageContainer: {
        flexDirection: "row"
    },
    page: {
        width: WIDTH * 0.03,
        height: HEIGHT * 0.01,
        backgroundColor: colors.darkblue,
        borderRadius: WIDTH * 0.1,
        marginHorizontal: WIDTH * 0.03
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: WIDTH * 0.7
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        color: colors.lightblack,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: colors.darkblue,
        paddingVertical: HEIGHT * 0.02,
        paddingHorizontal: WIDTH * 0.02,
        borderRadius: WIDTH * 0.1
    },
    gettingStartedButtonText: {
        color: colors.ashblue,
        fontSize: 22,
        fontWeight: 'bold'
    },
    gettingStartedButton: {
        backgroundColor: colors.lightgreen,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    }
})

export default WelcomeScreen