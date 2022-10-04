import Head from "next/head";

interface Children {
  children: any;
}

const Layout = ({ children }: Children) => {
  return (
    <>
      <Head>
        <title>Interactive Comments</title>
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
