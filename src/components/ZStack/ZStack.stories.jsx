import { ZStack, View, HStack } from '../../../dist'

export default {
  title: 'Layout/ZStack',
  component: ZStack,
  argTypes: {},
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const CaptionTemplate = args => {
  return (
    <ZStack alignment="bottomLeading" offset="1rem">
      <View
        style={{
          height: '400px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1636964204923-ebb7558340b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
        }}
      />
      <View
        padding="1rem"
        style={{
          backgroundColor: 'var(--gray-5)',
          borderRadius: 'var(--radius-2)',
        }}
      >
        A Caption
      </View>
    </ZStack>
  )
}

export const Caption = CaptionTemplate.bind({})
Caption.args = {}
