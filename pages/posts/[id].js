import Head from "next/head";

export default function Post({ post }) {
   return (
      <div>
         <Head>
            <title>{post.title} - My Blog</title>
         </Head>
         <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
         </div>
      </div>
   );
}

export async function getStaticPaths() {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const posts = await res.json();

   const paths = posts.map((post) => {
      return {
         params: { id: post.id.toString() },
      };
   });

   return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
   );
   const post = await res.json();

   return {
      props: {
         post,
      },
   };
}
