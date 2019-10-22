import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';
import Constants from '../constants'
import { Actions } from 'react-native-router-flux';
import Practise from '../newpractise/Test'

export default class TwoColComponent extends Component {
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
                console.log('two', data)
            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }
    imageclick = (value, id, val) => {
        // alert('dfddsfsadgdfg')


        Actions.Practise({ state: value, id: id, val: val })
    }
    render() {
        const pind = this.props.parentind
        return (
            <View >
                {this.state.array.map((data, index) => {
                    if (pind === index) {
                        return (
                            <View key={index} style={styles.inputmain}>
                                {data.subjects.map((val, ind) => {
                                    return (
                                        <View style={styles.imageview} key={ind}>
                                            {/* <Text>{val.Name}</Text> */}
                                            {val.design.map((datas, indexs) => {
                                                let urls = { uri: datas.url }
                                                let style = datas.style
                                                return (
                                                    <View key={indexs} >
                                                        <TouchableOpacity onPress={() => this.imageclick(val.subname, val.subid, val)}>
                                                            <Image style={style} source={urls} />
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    )
                                })}

                            </View>
                        )
                    }
                })}
            </View >
        )
    }
}
const styles = StyleSheet.create({
    /*main*/
    inputmain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    imageview: {
        width: '47%',
        display: 'flex',
        flexDirection: 'column',
    },
    // image: {
    //     width: "100%",
    //     height: 120,
    //     borderRadius: 10,
    //     marginTop: 5
    // }
});

