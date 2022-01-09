import React from 'react'
import { Box, Heading, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import PostCard from '../../../helpers/PostCard'
import { IPosts } from '../../../interfaces'

interface Props {
  posts: IPosts[]
}

const HomePosts: React.FC<Props> = ({ posts }) => {
  const [isMobile] = useMediaQuery('(max-width: 1000px)')

  if (posts.length > 0) {
    return (
      <Box className="constraint" my="120" px="5">
        <Heading
          className="main_title"
          fontSize="40"
          textAlign="center"
          justifyContent="center"
          mb="50"
        >
          Our most recent <p className="text_color">posts</p>
        </Heading>
        <SimpleGrid columns={isMobile ? 1 : 2} spacing={40}>
          {posts.map(({ id, attributes }) => (
            <PostCard key={id} post={attributes} />
          ))}
        </SimpleGrid>
      </Box>
    )
  } else {
    return null
  }
}

export default HomePosts
