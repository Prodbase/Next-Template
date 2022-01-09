import { GetServerSideProps } from 'next'

const CategoryHome = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default CategoryHome
