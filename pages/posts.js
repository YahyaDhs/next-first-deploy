import Head from "next/head";
import Link from "next/link";

export default function Posts({ posts }) {
   return (
      <div>
         <Head>
            <title>Posts</title>
         </Head>
         <h1>Posts</h1>
         <div>
            <ul>
               {posts.map((post) => {
                  return (
                     <Link key={post.id} href={`/posts/${post.id}`}>
                        <a>
                           <li>{post.title}</li>
                        </a>
                     </Link>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}

export async function getStaticProps(context) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const posts = await res.json();

   return {
      props: {
         posts,
      }, // will be passed to the page component as props
   };
}
