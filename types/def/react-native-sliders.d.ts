type SliderProps = {
  minimumValue: number
  maximumValue: number
  value: number
  onValueChange: (value: number) => void
}

declare module 'react-native-sliders' {
  export const Slider: FC<SliderProps>
}
