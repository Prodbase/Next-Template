import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Post from '../../components/Post'
import SeoComponent from '../../components/SeoComponent/SeoComponent'
import { client } from '../../graphql/client'
import { getPosts, getPostBySlug } from '../../graphql/querys'

interface Props {
  post: any
}

const PostPage: React.FC<Props> = ({ post }) => {
  return (
    <>
      <SeoComponent
        title={post.attributes.title}
        desc="Crie um website profissional, blog ou portfólio e ganhe destaque on-line."
        keywords="Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://example.com.br/"
      />
      <Post post={post} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { posts }
  } = await client.query({
    query: getPosts,
    variables: { status: 'ACTIVE' }
  })

  const paths = posts.data.map(({ attributes }) => ({
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
    query: getPostBySlug,
    variables: { slug: params?.slug, status: 'ACTIVE' }
  })

  return {
    props: {
      post: posts.data[0]
    },
    revalidate: 60
  }
}

export default PostPage
