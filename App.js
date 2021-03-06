/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Item from './js/Item';
import AndroidTool from './js/AndroidTool';
import ListViewDemo from './js/demo';
import ListViewDemo2 from './js/ListViewDemo2';
import NetWork from './js/FetchExample';
import VideoView from './js/VideoView';
import Bu from './js/Bu';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor(props){
        super(props);
        this.state={
            tabNames:['marco','demo','piexl','cast'],
            tabIconNames:['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add'],
        };
    }

    render() {
        let tabNames=this.state.tabNames;
        let tabIconNames=this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={()=>
                    <Item tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>
                <View>
                    <AndroidTool></AndroidTool>
                </View>
                <View style={styles.content} tabLabel='key2'>
                    <NetWork></NetWork>
                </View>
                <View style={styles.content} tabLabel='key3'>
                    <Bu></Bu>
                </View>
                <View style={styles.content} tabLabel='key4'>
                    <ListViewDemo2></ListViewDemo2>
                </View>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});
