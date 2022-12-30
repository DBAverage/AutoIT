import Head from "next/head";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
    return (
      <>
        <div>
          <Head>
            <title>AutoIT</title>
            <meta
              name="description"
              content="Portal for internal automation."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className="flex bg-transparent">
            <Sidebar />
            <div className="divider divider-horizontal"></div>
            <main>
              {children}
            </main>
          </div>
        </div>
      </>
    );
}
