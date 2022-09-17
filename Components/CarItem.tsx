import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'

import { Car } from '../types'

export type CarItemProps = {
  car: Car
}

export const CarItem: FC<CarItemProps> = ({ car }) => {
  return (
    <View>
      <article style={styles.container}>
        {car.imageSource && (
          <img
            src={car.imageSource}
            alt={`image of the ${car.make}`}
            style={styles.img}
          />
        )}
        <section>
          <h4 style={styles.make}>{car.make}</h4>
          <div style={styles.details}>
            <span>Model: {car.model}</span>
            <span>Year: {car.model_year}</span>
            <span>Color: {car.color}</span>
          </div>
        </section>
      </article>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    color: '#fff',
    border: '1px solid #000',
    padding: '16px',
    marginBottom: '8px',
    display: 'flex',
  },
  img: {
    marginRight: '8px',
  },
  make: {
    marginTop: 0,
    marginBottom: '16px',
  },
  details: {
    display: 'flex',
    gap: '16px',
  },
})
