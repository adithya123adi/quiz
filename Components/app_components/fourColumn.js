import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';
import Constants from '../constants'

export default class fourcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        }
    }
    componentDidMount = () => {
        fetch(Constants.dropdown)
            .then(response => response.json())
            .then(data => {
                this.setState({ array: data })
                console.log('fours', this.state.array)


            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }
    render() {
        const pind = this.props.parentind
        return (

            <View >
                {this.state.array.map((data, index) => {
                    if (pind === index) {
                        return (
                            <View key={index} style={styles.inputmain}>
                                {data.dashdesign.columnfour.map((val, ind) => {
                                    let urls = { uri: val.url }
                                    let imgstyle = val.urlstyle
                                    let txtstyle = val.namestyle
                                    return (
                                        <View key={ind} style={styles.imageview}>
                                            <Image source={urls} style={imgstyle}></Image>
                                            <Text style={txtstyle}>{val.name}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    }
                })}
            </View>

        )
    }
}
const styles = StyleSheet.create({
    inputmain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    imageview: {
        width: '22%',
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 2,
        alignItems: 'center',
        display: 'flex',
        marginBottom: 10
    },
    // image: {
    //     marginTop: 5,
    //     width: '65%',
    //     height: 50,
    //     borderRadius: 100
    // }
})