type HueSliderProps = {
  onValueChange: (color: string) => void
  gradientSteps: number
  value: number
}

declare module 'react-native-color' {
  export const HueSlider: FC<HueSliderProps>
}
