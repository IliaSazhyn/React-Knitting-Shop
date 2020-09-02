import React from "react";
import { Helmet } from "react-helmet";

function Meta() {
  return (
    <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Yamarsana</title>
        <meta
          name="description"
          content="Купить аксессуары для вязания, обучение вязанию - Магазин Yamarsana"
        ></meta>

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Yamarsana" />
        <meta
          itemprop="description"
          content="Купить аксессуары для вязания, обучение вязанию - Магазин Yamarsana"
        />
        <meta
          itemprop="image"
          content="https://yamarsana-shop.web.app/static/media/logo.2eb0ef50.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://yamarsana-shop.web.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yamarsana" />
        <meta
          property="og:description"
          content="Купить аксессуары для вязания, обучение вязанию - Магазин Yamarsana"
        />
        <meta
          property="og:image"
          content="https://yamarsana-shop.web.app/static/media/logo.2eb0ef50.png"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yamarsana" />
        <meta
          name="twitter:description"
          content="Купить аксессуары для вязания, обучение вязанию - Магазин Yamarsana"
        />
        <meta
          name="twitter:image"
          content="https://yamarsana-shop.web.app/static/media/logo.2eb0ef50.png"
        />
      </Helmet>
    </>
  );
}

export default Meta;
