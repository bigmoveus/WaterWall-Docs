import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

// Main features
const MainFeatures = [
  {
    title: "🚀 معماری مدرن و پرسرعت",
    description: (
      <>
        واتروال با بهره‌گیری از معماری چندنخی (multi-threaded)، عملیات I/O
        آسنکرون و مدیریت حافظه بهینه (Zero-Copy)، بالاترین سطح کارایی و کمترین
        تأخیر را برای پردازش ترافیک شبکه فراهم می‌کند.
      </>
    ),
  },
  {
    title: "🧩 انعطاف‌پذیری و ماژولار بودن",
    description: (
      <>
        با معماری مبتنی بر گره (Node-based)، می‌توانید پروتکل‌های پیچیده و
        سناریوهای شبکه سفارشی را تنها با پیکربندی JSON و بدون نیاز به کدنویسی
        پیاده‌سازی کنید. گره‌ها را مانند قطعات لگو ترکیب کنید!
      </>
    ),
  },
  {
    title: "🔒 امنیت پیشرفته و ضدسانسور",
    description: (
      <>
        پشتیبانی از پروتکل‌های پیشرفته مانند <strong>Reality</strong>،{" "}
        <strong>Trojan</strong> و <strong>HalfDuplex</strong> به همراه رمزنگاری
        چندلایه، واتروال را به ابزاری قدرتمند برای عبور از پیشرفته‌ترین
        سیستم‌های فیلترینگ تبدیل کرده است.
      </>
    ),
  },
];

// Advanced Tunnels
const AdvancedTunnels = [
  {
    title: "Reality Tunnel",
    description:
      "شبیه‌سازی ترافیک TLS به یک وب‌سایت واقعی برای پنهان‌سازی کامل و مقاومت در برابر شناسایی.",
  },
  {
    title: "Reset Tunnel",
    description:
      "دستکاری بسته‌های لایه ۳ و ۴ شبکه برای عبور از فایروال‌هایی که ترافیک استاندارد را محدود می‌کنند.",
  },
  {
    title: "HalfDuplex Tunnel",
    description:
      "تقسیم کانال آپلود و دانلود برای محدود کردن تحلیل ترافیک و افزایش پایداری در شبکه‌های ناپایدار.",
  },
  {
    title: "HTTP/2 & gRPC Mux",
    description:
      "استفاده از Multiplexing برای کاهش تعداد اتصالات، بهبود زمان Handshake و عبور از CDN.",
  },
  {
    title: "BGP4 Tunnel",
    description:
      "استفاده از پروتکل استاندارد BGP4 برای ایجاد تونل‌های مستقیم، پایدار و پرسرعت.",
  },
  {
    title: "Freebind",
    description:
      "اتصال به رنج وسیعی از IPهای IPv6 برای جلوگیری از فیلترینگ و توزیع بار هوشمند.",
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="card" style={{ height: "100%", padding: "1.5rem" }}>
        <div className="card__header">
          <Heading as="h3" style={{ fontSize: "1.5rem" }}>
            {title}
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function AdvancedTunnel({ title, description }) {
  return (
    <div className={clsx("col col--4")} style={{ marginBottom: "2rem" }}>
      <div className="card" style={{ height: "100%" }}>
        <div className="card__header">
          <Heading as="h4">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/tutorial-part1"
          >
            آموزش کامل 🚀
          </Link>
          <Link
            className="button button--secondary  button--lg"
            to="/docs/intro"
            style={{ marginLeft: "1rem" }}
          >
            معرفی پروژه
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | فریمورک نسل جدید تونلینگ و عبور از فیلترینگ`}
      description="واتروال یک چارچوب قدرتمند و انعطاف‌پذیر برای ایجاد تونل‌های شبکه است. با معماری مدولار، عملکرد بالا و پروتکل‌های امنیتی پیشرفته مانند Reality و Trojan، واتروال ابزاری قدرتمند برای عبور از محدودیت‌های شبکه است."
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {MainFeatures.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={clsx(styles.features, "features-alt")}>
          <div className="container">
            <div className="text--center" style={{ marginBottom: "3rem" }}>
              <Heading as="h2">مجموعه‌ای از قدرتمندترین پروتکل‌ها</Heading>
              <p>
                واتروال طیف گسترده‌ای از روش‌های تونل‌سازی پیشرفته را برای
                مقابله با هر نوع محدودیت ارائه می‌دهد.
              </p>
            </div>
            {/* <div className="row">
              {AdvancedTunnels.map((props, idx) => (
                <AdvancedTunnel key={idx} {...props} />
              ))}
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
