import React from 'react'
import { Button } from '../components'

const ButtonContainer = ({text, color, disabled}) => {
  return <Button>
      <Button.ButtonElement disabled={disabled}>
      <Button.Text color={color}>{ text }</Button.Text>
      </Button.ButtonElement>
  </Button>
}

export default ButtonContainer