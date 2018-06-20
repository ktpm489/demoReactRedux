import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import CoreLayout from 'frontend/Container/CoreLayoutContainer'
import { iconCamera } from 'common/globalIcon'
import { width, heightScale, height } from 'common/globalStyles'
import { HBInputError } from 'frontend/Components/HBInput'
const profileDefault = require('assets/Image/Profile/profile.png')
const colorActiveInput = '#1b3559'
const profilePage = (props) => {
  const { handleBackRoute, isUserNameErr, txtUsername, selection, handleFocusInput, onChangeUserName, isDisableSend, pressSaveUserName } = props
  const saveContainerStyle = isDisableSend ? [styles.saveBtnContainer, { borderColor: '#808080' }] : [styles.saveBtnContainer, { borderColor: 'white' }]
  const saveTxtContainerStyle = isDisableSend ? [styles.saveChangeTxt, { color: '#808080' }] : [styles.saveChangeTxt, { color: 'white' }]
  const txtInputErr = [styles.txtAddrErr, { top: heightScale(6) }]
  return (
    <CoreLayout title={'Profile'} leftAction={handleBackRoute}>
      <View style={styles.backgroundDefault}>
        <View style={styles.viewImageContainer}>
          <View style={styles.container}>
            <View style={styles.outerCircle}>
              <Image source={profileDefault} style={styles.innerCircle} />
            </View>
            <View style={styles.customIconEdit}>
              {iconCamera}
              <Text style={styles.editText}>{'Edit'}</Text>
            </View>
          </View>
          {/* <TouchableOpacity style={styles.userNameContainer}>
            <Text style={styles.userNameText} numberOfLine={1}>{'Miya zAAA'}</Text>
          </TouchableOpacity> */}
          <View style={styles.userNameContainer}>
            <HBInputError

              maxNum={25}
              value={txtUsername}
              isChangeHeightErr={true}
              // txtHolder={'Mya'}
              errMessage={'Can not save name '}
              msgTypeCustomErr={txtInputErr}
              containerStyle={styles.inputContainer}
              colorActive={colorActiveInput}
              {
              ...selection ? { selection } : null
              }
              onBlur={() => txtUsername && handleFocusInput(false)}
              onFocus={() => handleFocusInput(true)}
              isError={isUserNameErr}
              onChangeText={(text) => onChangeUserName(text.trim())}
            />
          </View>
          <TouchableOpacity style={saveContainerStyle} disabled={isDisableSend} onPress={pressSaveUserName}>
            <Text style={saveTxtContainerStyle}>{'Save changes'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CoreLayout>

  )
}
const styles = StyleSheet.create({
  userNameContainer: {
    marginTop: height(4),
    marginBottom: height(5),
    flex: 1,
    paddingVertical: height(2)
  },
  userNameText: {
    fontSize: width(4.5),
    color: '#808080',
    textAlign: 'center'
  },
  saveBtnContainer: {
    marginTop: height(5),
    paddingHorizontal: width(8),
    borderWidth: 1,
    paddingVertical: height(1),
    borderRadius: height(2)
  },
  saveChangeTxt: {
    fontSize: width(4.5)
  },
  backgroundDefault: {
    flex: 1
  },
  viewImageContainer: {
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconTitle: {
    overflow: 'hidden',
    width: width(100),
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: height(2)
  },
  imgIconContainer: {
    width: width(35),
    height: width(35),
    borderRadius: width(35) / 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: width(0.5)
  },
  imgIcon: {
    width: width(30),
    height: width(28),
    borderRadius: width(5),
    backgroundColor: 'red',
    overflow: 'hidden'
  },
  descriptionContainer: {
    paddingTop: height(1),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textName: {
    color: 'white',
    fontSize: width(5),
    paddingBottom: height(1)
  },
  container: {
    width: width(100),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingVertical: height(1)
  },
  outerCircle: {
    borderRadius: width(39) / 2,
    width: width(39),
    height: width(39),
    backgroundColor: '#46586B',
    overflow: 'hidden',
    borderWidth: width(0.5),
    borderColor: 'white'
  },
  innerCircle: {
    borderRadius: width(29) / 2,
    width: width(32),
    height: width(41),
    position: 'relative',
    marginTop: width(3),
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  customIconEdit: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    backgroundColor: 'transparent',
    paddingHorizontal: width(10),
    paddingTop: height(1)
  },
  editText: {
    color: '#808080',
    fontSize: width(5),
    textAlign: 'left'
  },
  inputContainer: {
    height: heightScale(6),
    width: width(94),
    marginHorizontal: width(3),
    marginBottom: width(2),
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderWidth: 1
  },
  txtAddrErr: {
    height: heightScale(6),
    width: width(80),
    paddingLeft: width(3),
    fontSize: width(3.5),
    alignSelf: 'flex-start',
    textAlign: 'justify'
  }
})

export default profilePage
