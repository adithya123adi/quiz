import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Picker, Alert } from 'react-native';
import { createAppContainer, ScrollView } from 'react-navigation';
import TabNavigator from './PracticeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Footer from './Footer'
import Drawer from 'react-native-drawer'
import Constants from '../constants'

const AppIndex = createAppContainer(TabNavigator)


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            array: []
        }

    }
    componentDidMount = () => {
        fetch(Constants.subject)
            .then(response => response.json())
            .then(data => {
                this.setState({ array: data })
                console.log('subject', data)
            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    updateUser = (user) => {
        this.setState({ user: user })
    }
    onclickstart = () => {
        Actions.mainquiz()
    }
    backscreen = () => {
        Actions.mock()
    }
    searchscreen = () => {
        Actions.search()
    }
    helpclick = () => {
        Alert.alert('help')
    }

    render() {
        return (
            <React.Fragment>
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
                        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                        <View style={styles.header}>
                            <View style={styles.bars}>
                                <Icon name="bars" size={25} color={"lightblue"} onPress={() => this.openControlPanel()} />
                            </View>
                            <View>
                                <Text style={styles.statustxt}>Practice</Text>
                                <View  >
                                    <Text style={styles.statustxt}>{this.props.state}</Text>
                                </View>
                            </View>
                            <View style={styles.icons}>
                                <Icon style={styles.iconstyle} name="search" size={20} color="black" onPress={() => this.searchbutton()} />
                                <Icon style={styles.iconstyle} name="question-circle-o" size={20} color="black" onPress={() => this.helpclick()} />
                            </View>
                        </View>
                        <View>
                            <Text>  {this.props.id}</Text>

                            {
                                this.state.array.map((data, index) => {
                                    if (this.props.id === data.subid)
                                        return (
                                            <View>
                                                {
                                                    data.chapters.map((val, ind) => {
                                                        return (
                                                            <View>
                                                                <Text>
                                                                    {val.chapter}
                                                                </Text>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                        )
                                })
                            }
                        </View>
                        <Footer />
                    </View>
                </Drawer>
            </React.Fragment >
        )
    }
}
const styles = StyleSheet.create({
    /*drawer */
    maindrawer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    drawericon: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 35,
        paddingBottom: 8,
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue",
    },
    insidedrawer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 25

    },

    drawertxt: {
        fontWeight: 'bold',
        fontSize: 25,

    },

    /*main */
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
        marginLeft: '55%',
        alignItems: 'center',
    },
    iconstyle: {
        marginLeft: 8,
    },



})
