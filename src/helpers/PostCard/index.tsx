import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import styles from './styles.module.css'

interface Props {
  post: any
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`post/${post.slug}`} passHref>
      <Box rounded="md" p="50" boxShadow="outline" className={styles.post_card}>
        <Image
          src={post.image.data.attributes.url}
          width={800}
          height={500}
          alt="Image autor"
        />
        <Text fontSize="30" fontWeight="600" mt="30">
          {post.title}
        </Text>
        <Text fontSize="14" color="gray.500" margin="auto">
          {post.excerpt}
        </Text>
        <Text fontSize="17" color="gray.700" mt="10">
          By {post.author.data.attributes.name}
        </Text>
      </Box>
    </Link>
  )
}

export default memo(PostCard)
