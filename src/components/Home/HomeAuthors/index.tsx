import React from 'react'
import Image from 'next/image'
import { Box, Heading, Grid, Text, useMediaQuery } from '@chakra-ui/react'
import styles from './styles.module.css'
import { IAuthor } from '../../../interfaces'

interface Props {
  authors: IAuthor[]
}

const HomeAuthors: React.FC<Props> = ({ authors }) => {
  const [isMobile] = useMediaQuery('(max-width: 500px)')

  return (
    <Box className="constraint" my="120" px="10">
      <Heading
        className="main_title"
        fontSize="40"
        textAlign="center"
        justifyContent="center"
        mb="50"
      >
        These are our authors <p className="text_color">authors</p>
      </Heading>
      <Grid
        templateColumns={`repeat(auto-fit, minmax(${
          isMobile ? '20rem' : '40rem'
        }, 1fr))`}
        gap={10}
      >
        {authors.map(({ id, attributes }) => (
          <Box key={id} rounded="md" py="50" className={styles.author_card}>
            <Image
              src={attributes.photo.data.attributes.url}
              width={200}
              height={200}
              alt="Image autor"
            />
            <Text fontSize="30" fontWeight="600" mt="30">
              {attributes.name}
            </Text>
            <Text
              maxW="30rem"
              fontSize="16"
              color="gray.700"
              margin="auto"
              mb="5"
            >
              {attributes.email}
            </Text>
            <Text maxW="30rem" fontSize="14" color="gray.500" margin="auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, corporis.
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeAuthors
