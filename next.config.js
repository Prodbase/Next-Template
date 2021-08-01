module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'prodbase.com.br',]
  },
  env: {
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN
  }
}