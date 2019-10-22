import React, { Component } from 'react';
import { Picker, StyleSheet, Alert, Text, View, ScrollView, Image, TouchableHighlight, CheckBox, TouchableOpacity, StatusBar, YellowBox } from 'react-native';
import { Button, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import Drawer from 'react-native-drawer'
import Footer from '../newpractise/Footer'
import { Actions } from 'react-native-router-flux';

export default class PracticeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Attempted: false,
            Paused: false,
            Unattempted: false,

        }
    }
    onclickstart = () => {
        Actions.mainquiz()
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    helpclick = () => {
        Alert.alert(
            '  Help  ',
            ' Please read the below contnet ',
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
    closesideControlPanel = () => {
        this.sidedrawer.close()
    };
    opensideControlPanel = () => {
        this.sidedrawer.open()
    };
    searchscreen = () => {
        Actions.search()
    }
    resetclick = () => {
        this.setState({ Attempted: this.state.Attempted = false, Unattempted: this.state.Unattempted = false, Paused: this.state.Paused = false })
    }
    applyclick = () => {
        if (this.state.Attempted && this.state.Unattempted && this.state.Paused)
            alert('select any one ')
        else if (this.state.Attempted && this.state.Unattempted)
            alert('select any one')
        else if (this.state.Attempted && this.state.Paused)
            alert('select any one')
        else if (this.state.Unattempted && this.state.Paused)
            alert('select any one')
        else if (!this.state.Attempted && !this.state.Unattempted && !this.state.Paused)
            alert('selected any one')
        else
            alert('applied')
    }
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
                    <Drawer
                        side='right'
                        ref={(ref) => this.sidedrawer = ref}
                        content={
                            <View style={styles.container}>
                                <View style={styles.headerf}>
                                    <View style={styles.center}>
                                        <View style={styles.backbars}>
                                            <Icon name="angle-left" size={35} color={"lightblue"} onPress={() => this.closesideControlPanel()} />
                                        </View>
                                        <View >
                                            <Text style={styles.filtertext}>Filter Mock Test</Text>
                                        </View>
                                        <View style={styles.btnreset}>
                                            <Button buttonStyle={styles.reset} titleStyle={styles.resettitle} title='Reset' onPress={() => this.resetclick()}></Button>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.insideview}>
                                    <Text style={styles.insideheading}>By Mock Test State</Text>
                                </View>
                                <View style={styles.maincheck}>
                                    <View style={styles.insidecheck}>

                                        <CheckBox
                                            value={this.state.Attempted}

                                            onChange={() => this.setState({ Attempted: !this.state.Attempted })}
                                        />
                                        <Text style={{ paddingTop: 5 }}>
                                            Attempted
                                                    </Text>
                                        <View style={{ paddingLeft: 75 }}>
                                            <CheckBox
                                                value={this.state.Unattempted}
                                                onChange={() => this.setState({ Unattempted: !this.state.Unattempted })}
                                            />
                                        </View>
                                        <Text style={{ paddingTop: 5 }}>
                                            Unattempted
                                                    </Text>
                                    </View>
                                    <View style={styles.insidecheck}>

                                        <CheckBox
                                            value={this.state.Paused}

                                            onChange={() => this.setState({ Paused: !this.state.Paused })}
                                        />
                                        <Text style={{ paddingTop: 5 }}>
                                            Paused
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ height: '5%' }}>
                                    <Button title='Apply' onPress={() => this.applyclick()}></Button>
                                </View>
                            </View>
                        }
                        type="static"
                        openDrawerOffset={0}>
                        <View style={styles.container}>
                            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
                            <View style={styles.header}>
                                <View style={styles.bars}>
                                    <Icon name="bars" size={25} color={"lightblue"} onPress={() => this.openControlPanel()} />
                                </View>
                                <View>
                                    <Text style={styles.statustxt}>Mock Test</Text>
                                    <View  >
                                        <Picker style={styles.picker} >
                                            <Picker.Item label="International Mathemetics Olympidia" value="1CBSE" />
                                            <Picker.Item label="Ellen" value="1ICSE" />
                                            <Picker.Item label="Maria 1-State" value="1State" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.icons}>
                                    <Icon style={styles.iconstyle} name="search" size={20} color="black" onPress={() => this.searchbutton()} />
                                    <Icon style={styles.iconstyle} name='filter' size={20} onPress={this.opensideControlPanel} />
                                    <Icon style={styles.iconstyle} name="question-circle-o" size={20} color="black" onPress={() => this.helpclick()} />
                                </View>
                            </View>
                            <ScrollView>
                                <View style={styles.maincontent}>
                                    <View style={styles.testbox}>
                                        <Text style={styles.textmain}>SOF Olympiad 2018</Text>
                                        <Text style={styles.textinside}>35 Questions | 50 Marks | 30 Minutes</Text>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Roman Number' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Expanded Form' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Ascending Order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Descending order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <Button buttonStyle={styles.btnsstart} title='Start Test' titleStyle={{ display: 'flex', alignItems: 'center' }} onPress={() => this.onclickstart()}></Button>
                                    </View>
                                </View>
                                <View style={styles.maincontent}>
                                    <View style={styles.testbox}>
                                        <Text style={styles.textmain}>SOF Olympiad 2018</Text>
                                        <Text style={styles.textinside}>35 Questions | 50 Marks | 30 Minutes</Text>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Roman Number' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Expanded Form' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Ascending Order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Descending order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <Button buttonStyle={styles.btnsstart} title='Start Test' titleStyle={{ display: 'flex', alignItems: 'center' }} onPress={() => this.onclickstart()}></Button>
                                    </View>
                                </View>
                                <View style={styles.maincontent}>
                                    <View style={styles.testbox}>
                                        <Text style={styles.textmain}>SOF Olympiad 2018</Text>
                                        <Text style={styles.textinside}>35 Questions | 50 Marks | 30 Minutes</Text>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Roman Number' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Expanded Form' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Ascending Order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Descending order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <Button buttonStyle={styles.btnsstart} title='Start Test' titleStyle={{ display: 'flex', alignItems: 'center' }} onPress={() => this.onclickstart()}></Button>
                                    </View>
                                </View>
                                <View style={styles.maincontent}>
                                    <View style={styles.testbox}>
                                        <Text style={styles.textmain}>SOF Olympiad 2018</Text>
                                        <Text style={styles.textinside}>35 Questions | 50 Marks | 30 Minutes</Text>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Roman Number' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Expanded Form' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Ascending Order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Descending order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <Button buttonStyle={styles.btnsstart} title='Start Test' titleStyle={{ display: 'flex', alignItems: 'center' }} onPress={() => this.onclickstart()}></Button>
                                    </View>
                                </View>
                                <View style={styles.maincontent}>
                                    <View style={styles.testbox}>
                                        <Text style={styles.textmain}>SOF Olympiad 2018</Text>
                                        <Text style={styles.textinside}>35 Questions | 50 Marks | 30 Minutes</Text>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Roman Number' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Expanded Form' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <View style={styles.buttons}>
                                            <Button buttonStyle={styles.btnstyle} title='Ascending Order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                            <Button buttonStyle={styles.btnstyle} title='Descending order' titleStyle={{ paddingBottom: 10, fontSize: 12 }}></Button>
                                        </View>
                                        <Button buttonStyle={styles.btnsstart} title='Start Test' titleStyle={{ display: 'flex', alignItems: 'center' }} onPress={() => this.onclickstart()}></Button>
                                    </View>
                                </View>
                            </ScrollView>
                            <Footer></Footer>

                        </View>
                    </Drawer>
                </Drawer>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    /*drawer filter */
    maincheck: {
        width: '100%',
        height: '78%'
    },
    headerf: {
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        height: '8%',
        width: "100%",
        borderBottomWidth: 1.5,
        borderBottomColor: "lightblue",
    },
    insidecheck: {
        display: 'flex',
        flexDirection: 'row',

    },
    filtertext: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 17
    },
    insideview: {
        display: 'flex',
        width: '100%',
        height: '8%',
        backgroundColor: '#DCDCDC',
        justifyContent: 'center'
    },
    insideheading: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 15
    },
    reset: {
        height: 20,

        marginTop: 15,
        borderRadius: 10,
    },
    btnreset: {
        marginLeft: '35%'
    },
    backbars: {
        flexDirection: "column",
        marginTop: 5,
        marginLeft: 10,
        color: "lightblue"
    },




    center: {
        display: "flex",
        flexDirection: "row"
    },

    i1: {
        marginLeft: 6,
    },
    i2: {
        marginLeft: 6,
    },

    maincontent: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    testbox: {

        borderColor: 'lightblue',
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    textmain: {
        fontSize: 25,
        fontStyle: 'italic',
        color: 'green',

    },
    textinside: {
        fontSize: 15,

    },
    buttons: {
        flexDirection: 'row',

    },
    btnstyle: {
        height: 30,
        borderRadius: 10,
        marginTop: '5%',
        marginRight: '5%',
        backgroundColor: '#3BB9FF'
    },
    footer: {
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1.5,
        borderBottomColor: "lightgray",
        borderTopColor: "lightgray"
    },
    btnsstart: {
        width: 120,
        height: 45,
        backgroundColor: '#3BB9FF',
        marginTop: 10,

        borderRadius: 10,
        marginBottom: 10
    },








    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: "100%"
    },
    note: {
        position: "relative",
        padding: 0,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#ededed",
        marginBottom: 30,
        display: "flex",
        width: 480,
    },
    Notetext: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
    },
    NotetextHeader: {
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "lightgray",
        width: 600,
        fontSize: 17,
    },
    notePush: {
        position: "absolute",

        top: 10,
        bottom: 10,
        right: 10,
        marginRight: 30
    },
    notePushText: {
        color: "black"
    },






    imageIcon: {
        height: 20,
        width: 20,
    },
    footerIcons1: {
        flexDirection: "column",
        left: 10,
        top: 13,
        marginRight: 20,
        alignItems: "center"
    },
    slide: {
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    },
    slide1: {
        paddingLeft: 45,
    },
    rightBox: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    },
    right: {
        marginLeft: 130,
        height: 20,
    },
    r1: {
        width: 200,
    },


    maindrawer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    insidedrawer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 25

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

    },
    container: {
        flex: 1,
        marginTop: 25,
        width: "100%",
        height: '100%',
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
        width: '275%',

        height: 30

    },
    icons: {
        flexDirection: "row",
        marginLeft: '48%',
        alignItems: 'center',
    },
    iconstyle: {
        marginLeft: 8,
    },

})