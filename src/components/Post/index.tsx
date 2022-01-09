import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
import MarkdownIt from 'markdown-it'
import {
  Box,
  Heading,
  Wrap,
  Flex,
  Text,
  SimpleGrid,
  useMediaQuery
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { IPosts } from '../../interfaces'

interface Props {
  post: IPosts
}

const Post: React.FC<Props> = ({ post }) => {
  var md = new MarkdownIt()
  const content = md.render(post.attributes.content)

  const [isMobile950] = useMediaQuery('(max-width: 950px)')

  return (
    <Box className="constraint" mt="120" px="10">
      <SimpleGrid
        columns={isMobile950 ? 1 : 2}
        gap={20}
        alignItems="center"
        mb="30"
      >
        <Box>
          <Heading fontSize="6xl" mb="10">
            {post.attributes.title}
          </Heading>
          <Wrap>
            <Image
              src={post.attributes.image.data.attributes.url}
              height={500}
              width={800}
              objectFit="cover"
              alt="imagem"
            />
          </Wrap>
        </Box>
        <Box>
          <Moment format="DD/MM/YYYY">{post.attributes.createdAt}</Moment>
          <Text fontSize="30" fontWeight="500">
            {post.attributes.category.data.attributes?.title}
          </Text>
          <Text fontSize="16" fontWeight="500" mb="10">
            By {post.attributes.author.data.attributes?.name}
          </Text>
          <Text>{post.attributes.excerpt}</Text>
        </Box>
      </SimpleGrid>
      <div dangerouslySetInnerHTML={{ __html: String(content) }} />
    </Box>
  )
}

export default Post
