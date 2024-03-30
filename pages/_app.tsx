import { AppProps } from "next/app";
import wrapper from "@/Redux/store";
import { Layout } from "@/Core/index";
import "@/Public/styles/global.css";
import {ParallaxProvider} from "react-scroll-parallax";




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className="flex h-full w-full">
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
    </div>
  );
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ ctx }: any) => {
      // const settingsData = await useFetchApiSS(
      //   "/Language/SiteMeta?lang=" + ctx.locale
      // );
      //await store.dispatch(settings_r(settingsData));
    }
);
export default wrapper.withRedux(MyApp);
