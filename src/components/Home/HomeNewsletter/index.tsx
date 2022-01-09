import React from 'react'
import styles from './styles.module.css'
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'

const HomeNewsletter: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      align="center"
      bg="light.ice"
      py="50"
      px="10"
    >
      <Heading fontSize="7xl">Receive all the news</Heading>
      <Text fontSize="3xl">
        Subscribe to our newsletter to stay up to date with all the news
      </Text>

      <form className={`${styles.form_newsletter} constraint`}>
        <Input placeholder="Informe seu E-Mail" padding="10" mt="10" />
        <Button
          mt="10"
          padding="10"
          rounded="0"
          bg="blackAlpha.700"
          color="light.ice"
          _hover={{ bg: 'purple' }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  )
}

export default HomeNewsletter
