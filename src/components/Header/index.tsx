import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import router from 'next/router'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import styles from './styles.module.css'
import { client } from '../../graphql/client'
import { getCategories } from '../../graphql/querys'

interface Props {
  categories: any[]
}
const WithSubnavigation: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const listCategories = async () => {
      const {
        data: { categories }
      } = await client.query({
        query: getCategories,
        variables: { status: 'ACTIVE' }
      })

      setCategories(categories.data)
    }
    listCategories()
  }, [])

  return (
    <Box bg="light.white" className={styles.header_wrap}>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 20 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            icon={
              isOpen ? <CloseIcon w={7} h={7} /> : <HamburgerIcon w={8} h={8} />
            }
            onClick={onToggle}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex w="100%" justify={{ base: 'flex-end', md: 'space-between' }}>
          <Link href="/">
            <a>
              <Flex>
                <Text fontSize="2rem" fontWeight="500">
                  HOBE BLOG
                </Text>
                <Text fontSize="1rem" ml="1rem">
                  EXAMPLE
                </Text>
              </Flex>
            </a>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav categories={categories} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav categories={categories} />
      </Collapse>
    </Box>
  )
}

const DesktopNav: React.FC<Props> = ({ categories }) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {categories.map(({ attributes }) => (
        <Box key={attributes.slug}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={
                  router.pathname === '/category/[slug]'
                    ? `${attributes.slug}`
                    : `category/${attributes.slug}`
                }
              >
                <a>{attributes.title}</a>
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav: React.FC<Props> = ({ categories }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {categories.map(({ attributes }) => (
        <MobileNavItem key={attributes.slug} category={attributes} />
      ))}
    </Stack>
  )
}

const MobileNavItem: React.FC<{ category: any }> = ({ category }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Link
        href={
          router.pathname === '/category/[slug]'
            ? `${category.slug}`
            : `category/${category.slug}`
        }
      >
        <a>
          <Flex>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.600', 'gray.200')}
            >
              {category.title}
            </Text>
          </Flex>
        </a>
      </Link>
    </Stack>
  )
}

export default WithSubnavigation
