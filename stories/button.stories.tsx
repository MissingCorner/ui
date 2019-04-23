import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, ThemeProps, ThemeProvider } from '../src'
import Button from '../src/components/Button'
import styled from 'styled-components'

const theme: ThemeProps = {
  colors: {},
}

const Test = styled(Button)`
  color: yellow;
  background-color: darkgoldenrod;
`

storiesOf('Flex', module).add('Default Container', () => (
  <ThemeProvider theme={theme}>
    <Test btnType="secondary" loading>
      Should be blue
    </Test>
    <Flex justify="center" marginTop={50} paddingBottom={50}>
      <span style={{ background: 'crimson', width: '50px', height: '50px' }}>Item 1</span>
      <span style={{ background: '#0047ab', width: '50px', height: '50px' }}>Item 2</span>
    </Flex>
    <Flex align="center" column>
      <span style={{ background: 'crimson', width: '50px', height: '50px' }}>Item 1</span>
      <span style={{ background: '#0047ab', width: '50px', height: '50px' }}>Item 2</span>
    </Flex>

    <Flex>
      <Button btnType="primary">Primary</Button>

      <Button btnType="secondary" marginLeft={5}>
        Secondary
      </Button>
    </Flex>

    <Flex marginTop={20}>
      <Button btnType="primary" loading>
        Primary
      </Button>

      <Button btnType="secondary" marginLeft={5} loading>
        Secondary
      </Button>
    </Flex>

    <Flex marginTop={20}>
      <Button btnType="primary" disabled>
        Primary
      </Button>

      <Button btnType="secondary" marginLeft={5} disabled>
        Secondary
      </Button>
    </Flex>

    <Flex marginTop={20}>
      <Button btnType="primary" outline>
        Primary
      </Button>

      <Button btnType="secondary" marginLeft={5} outline>
        Secondary
      </Button>
    </Flex>
  </ThemeProvider>
))
