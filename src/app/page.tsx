'use client'

// import Image from 'next/image'
// import styles from './page.module.css'
import { Button, GlobalStyles, Flex, FlexItem, Box, Text } from '@bigcommerce/big-design';
import { Widget } from './components/widget';

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <Box
        backgroundColor="secondary10"
        border="none"
        padding="xxxLarge"
      >
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="flex-start"
        >
          <FlexItem
            alignSelf="auto"
            flexBasis="auto"
            flexGrow={0}
            flexOrder={0}
            flexShrink={1}
          >
            <Widget />
          </FlexItem>
        </Flex>
      </Box>
    </main>
  )
}
