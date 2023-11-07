import { StyleSheet, Text, View ,Alert,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Avatar, Button, Card, Portal,Modal,List} from 'react-native-paper';

const _AddForm = ({_visible,_setVisible}) => {
    
    // const [visible, setVisible] = useState(_visible);
    // const showModal = () => setVisible(true);
    const hideModal = () => _setVisible(_visible);
    const [expanded, setExpanded] = useState(true);
    const [numTable, setNumTable] = useState();
    const handlePress = () => setExpanded(!expanded);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin:10, borderRadius:20};
    const listTable = [1,2,3,4,5,6,7,8,9,10]
    const showAlert=(numb)=>{
        Alert.alert(
            'Confirm your domande',
            'Are you sure you want to take this ?',                      
            [   
              {
                text: 'No',
                onPress: () => {Alert.alert('Cancel Pressed')
                setExpanded(false)
                _setVisible(false)
            },
                style: 'default',                
              },
              {
                text: 'Yes',
                onPress: () => {   
                    setNumTable(numb)
                    setExpanded(false);       
                    Alert.alert('THANKS :)',
                    "Thanks for choosing this delicious food, please wait for 10 min to get it prepared, your table's number : "+numb)                                                                
                    _setVisible(!_visible)
                },
                style: 'default',
              }
            ],
            {
              cancelable: true,
              onDismiss: () =>{
                Alert.alert(
                  'This alert was dismissed by tapping outside of the alert dialog.',
                )
                setExpanded(false)
                _setVisible(false)
            }
            },
            
          );
    }
    return(
        <View>
           <Portal>
            <Modal visible={_visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <ScrollView>
            <View>
                <View>
                <Text style={styles.modelTitle}>Ajouter Domande</Text>
                </View>
                <View>
                <List.Section title="Number of your table">
                    <List.Accordion
                        title="Number of your table"
                        left={props => <List.Icon {...props} icon="table" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        
                        {listTable.map((item)=>
                        <List.Item 
                        onPress={()=>{showAlert(item)}} 
                        title={'Table '+item} key={item}                       
                        />)}                        
                        
                    </List.Accordion>
                </List.Section>
                </View>
            </View>
            </ScrollView>
            </Modal>
        </Portal>       
      </View>
)
}

export default _AddForm

const styles = StyleSheet.create({})