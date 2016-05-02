import React, {
    Component,
    Image,
    Text,
    View,
    StyleSheet,
    ListView
} from 'react-native';

import Button from 'react-native-button';

import {Actions} from 'react-native-router-flux'

var styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    },
    noteName: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
    noteContent: {
        fontSize: 10,
        margin: 10,
    }
});

export default class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
        
        this.state.dataSource = ds.cloneWithRows([
            { name: 'Note 1', content: 'Content 1' },
            { name: 'Note 2', content: 'Content 2' },
            { name: 'Note 3', content: 'Content 3' },
            { name: 'Note 4', content: 'Content 4' },
            
        ])
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNote}/>
            </View>
        )
    }

    renderNote(note) {
        return (
            <View style={{padding: 10, borderColor: 'black', borderStyle:'solid' , borderWidth: 1}}>
                <Text style={styles.noteName}>{note.name}</Text>
                <Text style={styles.noteContent}>{note.content}</Text>
            </View>
        )
    }

}
