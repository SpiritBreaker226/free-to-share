import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Text } from 'react-native-paper'

export type MessageProps = {
  hasNoCarsInSearch: boolean
}

export const Message: FC<MessageProps> = ({ hasNoCarsInSearch }) => {
  return (
    <View style={styles.messageWrapper}>
      {hasNoCarsInSearch ? (
        <Text style={styles.message}>No cars found</Text>
      ) : (
        <Text style={styles.message}>Waiting for cars to loaded</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  messageWrapper: {
    margin: 80,
    textAlign: 'center',
  },
  message: {
    fontWeight: 'bold',
  },
})
