import { GetServerSideProps } from 'next'

const PostPage = () => {
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

export default PostPage
