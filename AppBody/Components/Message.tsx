import { StyleSheet } from 'react-native'
import React, { FC } from 'react'

export type MessageProps = {
  hasNoCarsInSearch: boolean
}

export const Message: FC<MessageProps> = ({ hasNoCarsInSearch }) => {
  return (
    <section style={styles.messageWrapper}>
      {hasNoCarsInSearch ? (
        <p style={styles.message}>No cars found</p>
      ) : (
        <p style={styles.message}>Waiting for cars to loaded</p>
      )}
    </section>
  )
}

const styles = StyleSheet.create({
  messageWrapper: {
    margin: '80px',
    textAlign: 'center',
  },
  message: {
    fontWeight: 'bold',
  },
})
