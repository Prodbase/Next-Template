import React, { useState } from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from './styles.module.css'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import { IBanner, IBannerSlideProps } from '../../../../interfaces'

interface Props {
  banners: IBanner[]
}

const BannerTwo: React.FC<Props> = ({ banners }) => {
  const banner = banners.find(
    bannerRef => bannerRef.attributes.slug === 'pagina-inicial-2'
  )

  if (banner) {
    return (
      <Box className="constraint" mt="120">
        <Heading className="main_title" fontSize="40" px="10">
          Some more tips
        </Heading>
        <Text fontSize={{ sm: 20, lg: '3xl' }} marginY="4" px="10">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team.
        </Text>
        <div className={styles.flex_carousel_wrap}>
          <Box className={styles.title_carousel_wrap}>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              color="light.ice"
              textAlign="center"
            >
              3 ways to increase your sales on special occasions
            </Text>
            <Text
              fontSize={{ sm: 20, lg: '2xl' }}
              color="light.ice"
              textAlign="center"
            >
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Text>
          </Box>
          <Splide
            options={{
              arrows: false,
              autoplay: true,
              gap: 20
            }}
          >
            {banner?.attributes.slides.data.map(
              (bannerData: IBannerSlideProps) => (
                <SplideSlide key={bannerData.id} className={styles.banner_card}>
                  <Image
                    src={bannerData.attributes.url}
                    alt={banner.title}
                    layout="fill"
                  />
                </SplideSlide>
              )
            )}
          </Splide>
        </div>
      </Box>
    )
  } else {
    return null
  }
}

export default BannerTwo
