import { GetStaticProps } from 'next'
import React from 'react'
import SeoComponent from '../components/SeoComponent/SeoComponent'
import {
  getAuthors,
  getBanners,
  getCategories,
  getPosts
} from '../graphql/querys'
import {
  HomeAuthors,
  HomePosts,
  HomeBannerOne,
  HomeBannerTwo
} from '../components/Home'
import HomeInitial from '../components/Home/HomeInitial'
import HomeNewsletter from '../components/Home/HomeNewsletter'
import { client } from '../graphql/client'
import { IBanner, IAuthor, IPosts } from '../interfaces'

interface Props {
  banners: IBanner[]
  authors: IAuthor[]
  posts: IPosts[]
}

const Home: React.FC<Props> = ({ authors, banners, posts }) => {
  return (
    <main>
      <SeoComponent
        title="HOBE BLOG | EXAMPLE"
        desc="Crie um blog profissional com a HOBE. Alta performance para grandes resultados"
        keywords="Sua agência de Marketing Digital especializada na criação de e-commerces e desenvolvimento de negócios no mundo digital!"
        url="https://www.hobecommerce.com.br/"
      />
      <section>
        <HomeInitial />
      </section>
      {banners.length > 0 && (
        <section>
          <HomeBannerOne banners={banners} />
        </section>
      )}
      {posts.length > 0 && (
        <section>
          <HomePosts posts={posts} />
        </section>
      )}
      {authors.length > 0 && (
        <section>
          <HomeAuthors authors={authors} />
        </section>
      )}
      <HomeNewsletter />
      {banners.length > 0 && (
        <section>
          <HomeBannerTwo banners={banners} />
        </section>
      )}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // GET AUTHORS
  const {
    data: { authors }
  } = await client.query({
    query: getAuthors,
    variables: { status: 'ACTIVE' }
  })

  // GET BANNERS
  const {
    data: { banners }
  } = await client.query({
    query: getBanners,
    variables: { status: 'ACTIVE' }
  })

  // GET POSTS
  const {
    data: { posts }
  } = await client.query({
    query: getPosts,
    variables: { status: 'ACTIVE' }
  })

  // GET CATEGORIES
  const {
    data: { categories }
  } = await client.query({
    query: getCategories,
    variables: { status: 'ACTIVE' }
  })

  const formatBanners = banners.data.map(
    (banner: { id: number; attributes: any }) => ({
      id: banner.id,
      attributes: banner.attributes
    })
  )

  return {
    props: {
      authors: authors.data,
      banners: formatBanners,
      posts: posts.data,
      categories: categories.data
    },
    revalidate: 60
  }
}

export default Home
