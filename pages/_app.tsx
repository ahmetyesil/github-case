import { AppProps } from "next/app";
import wrapper from "@/Redux/store";
import { Layout } from "@/Core/index";
import "@/Public/styles/global.css";
import {ParallaxProvider} from "react-scroll-parallax";
import { AntdRegistry } from "@ant-design/nextjs-registry";



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className="flex h-full w-full">
        <ParallaxProvider>
            <AntdRegistry>
                <Layout>
                  <Component {...pageProps} />
                 </Layout>
            </AntdRegistry>
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
