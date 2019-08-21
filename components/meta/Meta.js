import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @font-face {
        font-family: 'Montserrat Regular';
        src: url('/static/Montserrat-Regular.ttf');
        font-weight: normal;
        font-display: auto;
        font-style: normal;
      }
      html {
        box-sizing: border-box;
        font-size: 10px;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body { 
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        background-color: #FAFCFE;
        font-family: 'Montserrat Regular';
      }
    `}</style>
  </div>
)