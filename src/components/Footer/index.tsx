import React from 'react'
import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { Box, Flex, Text, useMediaQuery, Wrap } from '@chakra-ui/react'

const Footer: React.FC = () => {
  const [isMobile500] = useMediaQuery('(max-width: 500px)')
  return (
    <Box
      bg="blackAlpha.900"
      padding="10"
      color="light.ice"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="60"
    >
      <Flex
        align="center"
        gap={isMobile500 ? '10' : '20'}
        flexDirection={isMobile500 ? 'column' : 'row'}
      >
        <Wrap>
          <Text textAlign="center">
            Create your blog with{' '}
            <Link href="https://hobecommerce.com.br">
              <a target="_blank">
                <strong>HOBE COMMERCE</strong>
              </a>
            </Link>
          </Text>
        </Wrap>
        <Wrap>
          <Link href="https://www.instagram.com/hobecommerce/">
            <a target="_blank">
              <FiInstagram size={30} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/hobe-commerce-032920225/">
            <a target="_blank">
              <FaLinkedin size={30} />
            </a>
          </Link>
        </Wrap>
      </Flex>
    </Box>
  )
}

export default Footer
