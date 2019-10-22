import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Picker,
    Alert,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { PieChart } from "react-native-chart-kit";
import * as Progress from "react-native-progress";
import Drawer from "react-native-drawer";
import Footer from './Footer'
import Constants from '../constants'
import { T } from 'antd/lib/upload/utils';

export default class Statistics extends Component {
    state = {
        array: [],
        id: '',
        index: 0,
        routes: [
            { key: 'practice', title: 'Practice' },
            { key: 'analysis', title: 'Analysis' },
            { key: 'savedquestions', title: 'Saved_Quetions' }
        ],
    };
    goback = () => {
        Actions.push('/')
    }
    onclickstart = () => {
        Actions.mainquiz();
    };
    closeControlPanel = () => {
        this._drawer.close();
    };
    openControlPanel = () => {
        this._drawer.open();
    };

    updateUser = user => {
        this.setState({ user: user });
    };
    onclickstart = () => {
        Actions.mainquiz();
    };

    backscreen = () => {
        Actions.mock();
    };

    searchbutton = () => {
        Actions.search();
    };

    componentDidMount = () => {
        fetch(Constants.subject)
            .then(response => response.json())
            .then(data => {
                console.log("data", data, this);
                this.setState({ array: data, id: this.props.id })

            })
            .catch(err => {
                console.log("inside error");
                console.log(err);
            })
    }

    Practice = () => {

        return (
            <View>

            </View>

        )

    }
    Analysis = () => {

        return (
            <View>

            </View>

        )
    }
    Saved_Quetions = () => {

        return (
            <View>

            </View>

        )
    }
    render() {

        console.log('props', this.props.val)
        return (
            <React.Fragment>
                <Drawer
                    ref={ref => (this._drawer = ref)}
                    content={
                        <View style={styles.maindrawer}>
                            <StatusBar
                                barStyle="dark-content"
                                hidden={false}
                                backgroundColor="white"
                                translucent={true}
                            />
                            <View style={styles.drawericon}>
                                <Icon
                                    name="angle-right"
                                    size={35}
                                    color={"lightblue"}
                                    onPress={() => this.closeControlPanel()}
                                />
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
                    openDrawerOffset={100}
                >
                    <View style={styles.container1}>
                        <View style={styles.header1}>
                            <View style={styles.bars1}>
                                <Icon
                                    name="bars"
                                    size={25}
                                    color={"lightblue"}
                                    onPress={() => this.openControlPanel()}
                                />
                            </View>
                            <View>
                                <Text style={styles.statustxt1}>Practice</Text>
                                <View  >
                                    <Text style={styles.statustxt}>{this.props.state}</Text>
                                </View>
                            </View>
                            <View style={styles.icons1}>
                                <Icon
                                    style={styles.iconstyle1}
                                    name="search"
                                    size={20}
                                    color="black"
                                    onPress={() => this.searchbutton()}
                                />
                            </View>
                        </View>
                        {/* <TabView
                            navigationState={this.state}
                            renderScene={SceneMap({
                                practice: this.Practice,
                                analysis: this.Analysis,
                                savedquestions: this.Saved_Quetions
                            })}
                            onIndexChange={index => this.setState({ index })}
                            initialLayout={{ width: Dimensions.get('window').width }}
                            renderTabBar={props =>
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: 'black' }}
                                    style={{ backgroundColor: 'white' }}
                                    activeColor='black'
                                    inactiveColor='black'
                                />
                            }
                        /> */}
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
                        <Footer />
                    </View>

                </Drawer>
            </React.Fragment>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        marginTop: 25,
        width: "100%",
        backgroundColor: 'white',

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

    /*container*/
    container1: {
        width: "100%",
        backgroundColor: "white"
    },

    /*body*/
    note: {
        position: "relative",
        padding: 0,
        borderBottomWidth: 2,
        borderBottomColor: "#ededed",
        marginBottom: 30,
        display: "flex",
        width: "100%"
    },

    Notetext: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
    },

    Notetext1: {
        width: "80%",
    },

    NotetextPro: {
        width: "30%"
    },
    NotetextHeader: {
        paddingLeft: 20,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: "lightgray",
        width: "100%",
        fontSize: 16
    },

    rightBox: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        width: "100%"
    },
    right: {
        marginLeft: "10%",
        height: 20,
        width: "20%",
    },
    proBar: {
        marginRight: 300,
        height: 20,
        marginTop: 12
    },


    /*drawer */
    maindrawer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%"
    },

    drawericon: {
        display: "flex",
        alignItems: "flex-end",
        marginTop: 35,
        paddingBottom: 8,
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue"
    },

    insidedrawer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20,
        paddingTop: 25
    },

    drawertxt: {
        fontWeight: "bold",
        fontSize: 25
    },

    container1: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        backgroundColor: "white"
    },

    header1: {
        backgroundColor: "white",
        flexDirection: "row",
        display: "flex",
        height: 55,
        width: "100%",
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue"
    },

    bars1: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10,
        color: "lightblue",
        marginRight: 5
    },

    statustxt1: {
        marginTop: 2,
        marginLeft: 9,
        fontSize: 14,
        color: "#000",
        fontWeight: "bold"
    },

    picker1: {
        width: "325%",
        height: 30
    },
    icons1: {
        flexDirection: "row",
        marginLeft: "55%",
        alignItems: "center"
    },
    iconstyle1: {
        marginLeft: 8
    },
})