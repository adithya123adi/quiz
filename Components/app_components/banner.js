import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';
import Constants from '../constants'

export default class Banner extends Component {
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
                console.log('banner', data)
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
                            <View key={index} style={styles.horiview} >
                                {data.dashdesign.banner.map((val, ind) => {
                                    let urls = { uri: val.url }
                                    let style = val.style
                                    return (
                                        <View style={styles.horiimage} key={ind}>
                                            <Image source={urls} style={style} ></Image>
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
    horiview: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    horiimage: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5
    },
    // image: {
    //     width: 375,
    //     height: 120,
    //     borderRadius: 10,

    // }
})