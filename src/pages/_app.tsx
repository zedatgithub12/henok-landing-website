import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sora.className} antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
