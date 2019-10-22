import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, StatusBar, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Drawer from 'react-native-drawer'
import { Actions } from 'react-native-router-flux';
import Stat from './stat'
import FourColComponent from '../app_components/fourColumn'
import TwoColComponent from '../app_components/twoColumn';
import Banner from '../app_components/banner'
import Constants from '../constants'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            itemval: '',
            itemind: '',
            msg: ''
        }
    }
    handlesubmitmocktest = () => {
        Actions.practise()
    }
    handlesubmitimage = () => {
        alert('image click')
    }
    componentDidMount = () => {
        fetch(Constants.dropdown)
            .then(response => response.json())
            .then(data => {
                this.setState({ array: data })
            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }
    statistics = () => {
        Actions.stat()
    }
    helpclick = () => {
        Alert.alert(
            ' Help',
            'Please read the below contnet ',
            [
                {
                    text: 'Cancel',
                },
                { text: 'OK' },
            ]
        );
    }
    closeControlPanel = () => {
        this._drawer.close()

    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <React.Fragment>
                {/*side drawer menu for mocktest*/}
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    content={
                        <View style={styles.maindrawer} >
                            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                            <View style={styles.drawericon}>
                                <Icon name="angle-right" size={35} color={"lightblue"} onPress={() => this.closeControlPanel()} />
                            </View>
                            <View style={styles.insidedrawer}>
                                <Text style={styles.drawertxt}>Profile</Text>
                                <Text style={styles.drawertxt}>Mock Test</Text>
                                <Text style={styles.drawertxt}>Quiz</Text>
                                <Text style={styles.drawertxt}>Online Test</Text>
                                <Text style={styles.drawertxt}>Contact</Text>
                                <Text style={styles.drawertxt}>About</Text>
                            </View>
                        </View>
                    }
                    type="static"
                    openDrawerOffset={100}>
                    <View style={styles.container}>
                        <StatusBar barStyle="dark-content" hidden={false} />
                        <View style={styles.header}>
                            <View style={styles.bars}>
                                <Icon name="bars" size={25} color={"lightblue"} onPress={() => this.openControlPanel()} />
                            </View>
                            <View>
                                <Text style={styles.statustxt}>Practice</Text>
                                <View  >
                                    {/*picker */}
                                    <Picker style={styles.picker} selectedValue={this.state.itemval} onValueChange={(itemValue, itemIndex) => this.setState({ itemval: itemValue, itemind: itemIndex })} >
                                        {this.state.array.map((data, index) => {
                                            return (
                                                <Picker.Item label={data.name} value={data.name} key={index} />
                                            )
                                        })}
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.icons}>
                                <Icon style={styles.iconstyle} name="search" size={20} color="black" onPress={() => this.searchbutton()} />
                                <Icon style={styles.iconstyle} name="bell" size={20} color="black" />
                                <Icon style={styles.iconstyle} name="question-circle-o" size={20} color="black" onPress={() => this.helpclick()} />
                                <Icon style={styles.iconstyle} name="power-off" size={20} color="black" />
                            </View>
                        </View>
                        <ScrollView>
                            <TwoColComponent parentval={this.state.itemval} parentind={this.state.itemind} ></TwoColComponent>
                            <ScrollView horizontal={true}>
                                <Banner parentval={this.state.itemval} parentind={this.state.itemind} >
                                </Banner>
                            </ScrollView>
                            <FourColComponent parentval={this.state.itemval} parentind={this.state.itemind}></FourColComponent>
                        </ScrollView>
                    </View>
                </Drawer>
            </React.Fragment >
        )
    }
}
const styles = StyleSheet.create({
    footermain: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    footerview: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
    },
    Imagesicon: {
        width: '90%',
        borderRadius: 10,
        height: 90,
        marginTop: 5,
        marginLeft: 5
    },
    newex: {
        height: 120,
        width: '92%',
        borderRadius: 10,
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8
    },
    newex1: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
    },
    horiview: {

        display: 'flex',
        flexDirection: 'row',
        width: '100%'

    },
    horiimage: {
        height: 150,

        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10
    },

    container: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        backgroundColor: 'white'

    },
    /*header*/
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
        marginTop: 2,
        marginLeft: 9,
        fontSize: 14,
        color: "#000",
        fontWeight: "bold"
    },
    picker: {
        width: '325%',
        height: 30
    },
    icons: {
        flexDirection: "row",
        marginLeft: '40%',
        alignItems: 'center',
    },
    iconstyle: {
        marginLeft: 8,
    },
    /*main*/
    inputmain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'

    },

    maindrawer: {

        width: '100%',
        height: '100%'
    },
    insidedrawer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 30

    },
    drawericon: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 35,
        paddingBottom: 8,
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue",
    },
    drawertxt: {
        fontWeight: 'bold',
        fontSize: 25,

    }

})
