import Script from "next/script"

export default function Head(){
    return(
        <>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        <title>Baran Genez - Kişisel Web Sitesi</title>
        <meta name="description" content="Front-End Developer, Kişisel blog, HTML, CSS, Javascript, React, NextJS" />
        <meta name="author" content="Baran Genez, barangenez@hotmail.com"/>
        <link rel="canonical" href="https://www.barangenez.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="yandex-verification" content="5bf1296242b30a64" />
        <meta name="publisher" content="Next.js 13" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Baran Genez - Kişisel Web Sitesi" />
        <meta property="og:description" content="Front-End Developer, Kişisel blog, HTML, CSS, Javascript, React, NextJS" />
        <meta property="og:url" content="https://www.barangenez.com" />
        <meta name="ahrefs-site-verification" content="fee4688ab2988eb9c3b99c43599a06a7ec9d373ea0a1c911150366634e1baf9c"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@barangenez" />
        <meta name="twitter:title" content="Baran Genez" />
        <meta name="twitter:description" content="Front-End Developer" />
        <meta name="twitter:url" content="https://www.barangenez.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2488936485276091"
     crossOrigin="anonymous"></script>

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KN9FKWZCV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3KN9FKWZCV');
        `}
      </Script>
     
      </>
    )
}