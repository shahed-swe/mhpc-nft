import '../styles/app.scss'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNprogress
        color="#393359"
        startPosition={0.2}
        stopDelayMs={200}
        height={2}
        options={{showSpinner: false}}
    />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
