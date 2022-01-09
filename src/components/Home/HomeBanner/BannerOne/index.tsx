import React from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from './styles.module.css'
import { Box, Text, Heading, useMediaQuery } from '@chakra-ui/react'
import { IBanner, IBannerSlideProps } from '../../../../interfaces'

interface Props {
  banners: IBanner[]
}

const BannerOne: React.FC<Props> = ({ banners }) => {
  const banner = banners.find(
    bannerRef => bannerRef.attributes.slug === 'pagina-inicial-1'
  )

  const [isMobile] = useMediaQuery('(max-width: 1000px)')

  return (
    <Box className="constraint" mt="120">
      <Heading className="main_title" fontSize="40" px="10">
        In search of new <p className="text_color">solutions</p> for your
        business
      </Heading>
      <Text fontSize={{ sm: 20, lg: '3xl' }} marginY="4" px="10">
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team.
      </Text>
      <div className={styles.flex_carousel_wrap}>
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
        <Box className={styles.title_carousel_wrap}>
          <Text
            fontSize={{ base: '3rem', md: '6rem', xl: '8rem' }}
            fontWeight="bold"
            className="main_title"
          >
            This is the <p className="text_color">moment</p>
          </Text>
          <Text fontSize={{ sm: 20, lg: '3xl' }} color="#111">
            There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team, but it also
            brings benefits to engineering teams. It makes sure that our
            experiences have a consistent look and feel, not just in our design
            specs, but in production
          </Text>
        </Box>
      </div>
    </Box>
  )
}

export default BannerOne
