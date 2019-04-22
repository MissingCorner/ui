import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from '../src'

storiesOf('Flex', module).add('Default Flex Container', () => <Flex justify="center">Flex</Flex>)
