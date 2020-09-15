import React from "react";
import Icon from "../../assets/images/logo.png"
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
          content={Icon}
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://yamarsana-shop.web.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={Icon}
        />
        <meta property="og:title" content="Yamarsana" />
        <meta
          property="og:description"
          content="Купить аксессуары для вязания, обучение вязанию - Магазин Yamarsana"
        />
        <meta
          property="og:image"
          content={Icon}
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
          content={Icon}
        />
      </Helmet>
    </>
  );
}

export default Meta;
