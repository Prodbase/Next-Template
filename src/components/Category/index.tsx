import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import {
  Heading,
  Box,
  Text,
  SimpleGrid,
  Input,
  useMediaQuery
} from '@chakra-ui/react'
import PostCard from '../../helpers/PostCard'

interface Props {
  category: any
  posts: any[]
}

const CategoryComponent: React.FC<Props> = ({ category, posts }) => {
  const [searchPost, setSearchPost] = useState('')
  const [postsArray, setPostArray] = useState<any[]>([])

  const [isMobile] = useMediaQuery('(max-width: 1000px)')

  useEffect(() => {
    const searchArray = posts.filter(post => {
      const postTitle = post.attributes.title.toLowerCase()
      return postTitle.includes(searchPost.toLowerCase())
    })

    setPostArray(searchArray.length >= 1 ? searchArray : posts)
  }, [posts, searchPost])

  return (
    <Box
      px="10"
      className={`${styles.wrap_categorypage} constraint`}
      mt={posts.length > 0 ? '120' : '0'}
      style={{ height: posts.length > 0 ? '100%' : '100vh' }}
    >
      <Heading fontSize="9xl">{category.attributes.title}</Heading>
      <Text>
        {posts.length > 0
          ? `Found some posts about ${category.attributes.title} for you`
          : `No posts found about ${category.attributes.title} :(`}
      </Text>
      {posts.length > 0 && (
        <Input
          variant="filled"
          padding="10"
          maxW="450"
          mt="30"
          placeholder="Enter the post name"
          onChange={e => setSearchPost(e.target.value)}
        />
      )}
      {posts.length > 0 && (
        <SimpleGrid columns={isMobile ? 1 : 2} spacing={40} mt="120">
          {postsArray.map(({ id, attributes }) => (
            <PostCard key={id} post={attributes} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default CategoryComponent
