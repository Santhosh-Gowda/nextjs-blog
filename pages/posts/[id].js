import Head from "next/head";
import React from "react";
import Date from "../../components/date";
import { getPostData, getAllPostIds } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

const Post = ({ postData, params }) => {
  console.log("requesting originating from ", params.id);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
      params,
    },
  };
}

export default Post;
