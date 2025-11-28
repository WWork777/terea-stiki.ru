import Image from "next/image";
import "./main.scss";
import Preview from "../../components/Home/Preview/Preview";
// import Exclusive from "../../components/Home/Exclusive/Exclusive";

export const metadata = {
  title: "Купить IQOS Iluma и Terea в Москве | Iluma Store",
  description:
    "Оригинальные устройства IQOS Iluma и стики Terea с доставкой по РФ. Гарантия подлинности, низкие цены и акции.",
  alternates: {
    canonical: `https://iluma-store.ru`,
  },
  openGraph: {
    title: `Купить IQOS Iluma и Terea в Москве | Iluma Store`,
    description: `Оригинальные устройства IQOS Iluma и стики Terea с доставкой по РФ. Гарантия подлинности, низкие цены и акции.`,
    url: `https://iluma-store.ru`,
    images: [
      {
        url: `/favicon/web-app-manifest-512x512`,
        alt: `Ilumastore`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="products-catalog-container">
        <h1>Каталог товаров Iluma</h1>
        <Preview />
        {/* <h2>Популярное</h2>
        <Exclusive /> */}
      </div>
    </>
  );
}
