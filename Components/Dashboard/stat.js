import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { Actions } from 'react-native-router-flux';

export default class Statistics extends React.Component {
    goback = () => {
        Actions.push('/')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.bars}>
                        <Icon name="angle-left" size={32} color={"black"} onPress={() => this.goback()} />
                    </View>
                    <View style={styles.statustxt}>
                        <Text style={styles.texts} >Our Statistics</Text>

                    </View>

                </View>
                <View style={styles.main}>
                    <View style={styles.inside} >
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 7</Text>
                            <Text style={styles.contenttexts}>Products</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 5</Text>
                            <Text style={styles.contenttexts}>Countries</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 10K+</Text>
                            <Text style={styles.contenttexts}>Students</Text>
                        </View>
                    </View>
                    <View style={styles.inside} >
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 3</Text>
                            <Text style={styles.contenttexts}>Languages</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 100K</Text>
                            <Text style={styles.contenttexts}>Questions</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 400</Text>
                            <Text style={styles.contenttexts}>Products</Text>
                        </View>
                    </View>
                    <View style={styles.inside} >
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 500K</Text>
                            <Text style={styles.contenttexts}>Qusetions </Text>
                            <Text style={styles.contenttexts}>Served </Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 450K</Text>
                            <Text style={styles.contenttexts}>Online </Text>
                            <Text style={styles.contenttexts}>Qusetions </Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 50K</Text>
                            <Text style={styles.contenttexts}>Offline </Text>
                            <Text style={styles.contenttexts}>Qusetions </Text>
                        </View>
                    </View>
                    <View style={styles.inside} >
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 300K</Text>
                            <Text style={styles.contenttexts}>Qusetions </Text>
                            <Text style={styles.contenttexts}>Answered </Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 25</Text>
                            <Text style={styles.contenttexts}>Mins Avg </Text>
                            <Text style={styles.contenttexts}>per Student</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.contenttext}> 1500</Text>
                            <Text style={styles.contenttexts}>Hours time </Text>
                            <Text style={styles.contenttexts}>Spent</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    /*header */
    container: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        height: 55,
        width: "100%",
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue",
    },

    bars: {
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 10,

        color: "lightblue",
        marginRight: 5
    },
    statustxt: {
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft: 10,

    },
    texts: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"
    },
    /*main */
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'lightgrey',
        height: '100%'
    },
    inside: {

        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },
    content: {

        width: '29%',
        height: 100,
        backgroundColor: '#3BB9FF',
        marginLeft: 11,
        marginTop: 11,
        borderRadius: 6,
        display: 'flex',


        alignItems: 'center'
    },
    contenttext: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',

    },
    contenttexts: {
        fontSize: 15,

        color: 'white',

    },
})