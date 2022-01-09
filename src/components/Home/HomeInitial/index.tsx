import React from 'react'
import Image from 'next/image'
import {
  SimpleGrid,
  Box,
  Text,
  Container,
  Wrap,
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  useMediaQuery,
  Heading,
  Grid
} from '@chakra-ui/react'
import styles from './styles.module.css'

const HomeInitial: React.FC = () => {
  const isMobileMd = useMediaQuery('(max-width: 1000px)')

  return (
    <Container className={styles.wrap} maxW="100%">
      <Wrap w="100%" className="constraint">
        <SimpleGrid
          className={styles.grid_wrapper}
          alignItems="center"
          gap={6}
          padding="10"
        >
          <Box>
            <Text fontSize="2xl" fontWeight="400">
              HOBE - BLOG EXAMPLE
            </Text>
            <Text
              fontSize={{ base: '30px', md: '40px', lg: '56px' }}
              fontWeight="bold"
            >
              Welcome to my blog
            </Text>
            <Text
              fontSize={{ sm: 20, lg: '4xl' }}
              className={styles.text_content}
              marginTop="3"
            >
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Text>
            <Wrap marginTop="10">
              <form className={styles.form_newsletter}>
                <InputGroup>
                  <InputLeftAddon
                    bg="light.ice"
                    padding="8"
                    fontSize="1.6rem"
                    display={{ base: 'none', md: 'flex' }}
                  >
                    Inscreva-se
                  </InputLeftAddon>
                  <Input
                    padding="8"
                    type="email"
                    fontSize="1.6rem"
                    placeholder="Enter your email"
                  />
                </InputGroup>
                <Button
                  padding="8"
                  borderRadius="0"
                  bg="#111"
                  color="light.ice"
                  fontWeight="400"
                  _hover={{ bg: 'purple' }}
                >
                  Enviar
                </Button>
              </form>
            </Wrap>
          </Box>
          <Box className={styles.image_wrap} height={{ lg: 700 }}>
            <Image
              src="https://images.pexels.com/photos/1027162/pexels-photo-1027162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              alt="imagem"
            />
          </Box>
        </SimpleGrid>
      </Wrap>
      <Wrap w="100%" className="constraint" marginTop="12rem">
        <Heading className="main_title" fontSize="40">
          The <p className="text_color">challenge</p> is here
        </Heading>
        <Box>
          <Text fontSize={{ sm: 20, lg: '3xl' }} marginY="4">
            There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team, but it also
            brings benefits to engineering teams. It makes sure that our
            experiences have a consistent look and feel, not just in our design
            specs, but in production
          </Text>
        </Box>
      </Wrap>
      <Grid
        w="100%"
        mt="50"
        className="constraint"
        templateColumns={`repeat(auto-fit, minmax(${
          isMobileMd ? '30rem' : '40rem'
        }, 1fr))`}
        gap={10}
      >
        <Box className={styles.image_wrap_card}>
          <Image
            src="https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            objectFit="cover"
            alt="imagem"
          />
        </Box>
        <Box className={styles.image_wrap_card}>
          <Image
            src="https://images.pexels.com/photos/7167028/pexels-photo-7167028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            objectFit="cover"
            alt="imagem"
          />
        </Box>
        <Box className={styles.image_wrap_card}>
          <Image
            src="https://images.pexels.com/photos/5882560/pexels-photo-5882560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            alt="imagem"
          />
        </Box>
      </Grid>
    </Container>
  )
}

export default HomeInitial
