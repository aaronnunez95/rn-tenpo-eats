import { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'

const useOrientation = () => {
  const [ orientation, setOrientation ] = useState('PORTRAIT')
  const window = useWindowDimensions()

  useEffect(() => {
    if(window.height > window.width)
      setOrientation('PORTRAIT')
    else
      setOrientation('LANDSCAPE')
  }, [ window.height, window.width ])

  return orientation
}

export default useOrientation
