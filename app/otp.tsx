import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import { openExternalLink } from '@/utils/openLink'
import Colors from '@/constants/Colors'
const Page = () => {
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const router = useRouter()
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90: 0

   
  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.description}>
          WhatsApp will need to verify your account. Carrier charges may apply.
        </Text>

        <View style={styles.list}>
            <View style={styles.listItem}>
                <Text>Nigeria</Text>
            </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20
   },
   description: {
    fontSize: 14,
    color: Colors.gray
   },
   list: {
     backgroundColor: '#fff',
     width: '100%',
     borderRadius: 10,
     padding: 10
   },
   listItem: {

   }
})
export default Page