import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Heading, Text } from '@chakra-ui/react'
import { client } from '../../graphql/client'
import {
  getCategories,
  getPostByCategory,
  getCategoryBySlug
} from '../../graphql/querys'
import Header from '../../components/Header'
import CategoryComponent from '../../components/Category'
import SeoComponent from '../../components/SeoComponent/SeoComponent'

interface Props {
  posts: any[]
  category: any
}

const Category: React.FC<Props> = ({ posts, category }) => {
  return (
    <>
      <SeoComponent
        title={`Category | ${category.attributes.title}`}
        desc="Crie um website profissional, blog ou portfólio e ganhe destaque on-line."
        keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://example.com.br/"
      />
      <CategoryComponent posts={posts} category={category} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { categories }
  } = await client.query({
    query: getCategories,
    variables: { status: 'ACTIVE' }
  })

  const paths = categories.data.map(({ attributes }) => ({
    params: { slug: attributes.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { posts }
  } = await client.query({
    query: getPostByCategory,
    variables: { categorySlug: params?.slug, status: 'ACTIVE' }
  })

  const {
    data: { categories }
  } = await client.query({
    query: getCategoryBySlug,
    variables: { slug: params?.slug, status: 'ACTIVE' }
  })

  return {
    props: {
      category: categories.data[0],
      posts: posts.data
    },
    revalidate: 60
  }
}

export default Category
