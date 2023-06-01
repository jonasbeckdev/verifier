import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export default class AccessoryBar extends React.Component<any> {
  render() {
    const { onSend, isTyping } = this.props

    return (
      <View style={styles.container}>
        <Button onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true
            }).then(({path})=>onSend(path))
        }} name='photo' />
        <Button onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true
            }).then(({path})=>onSend(path))
        }} name='camera' />
        {/* <Button onPress={() => getLocationAsync(onSend)} name='my-location' /> */}
        <Button
          onPress={() => {
            isTyping()
          }}
          name='chat'
        />
      </View>
    )
  }
}

const Button = ({
  onPress,
  size = 30,
  color = 'rgba(0,0,0,0.5)',
  ...props
}) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialIcons size={size} color={color} {...props} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.3)',
  },
})
