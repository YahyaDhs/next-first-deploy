import Head from "next/head";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
               rel="stylesheet"
               href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
         </Head>
         <main>
            <h1>Home</h1>
         </main>
      </div>
   );
}
