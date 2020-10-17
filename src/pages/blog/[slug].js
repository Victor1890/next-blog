import { Fragment } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Header from "../../components/header";

const Post = ({ contents, data }) => {
  return (
    <Fragment>
      <Header title={data.title} description={data.description} />
      <div
        className="container mx-auto px-4"
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(`src/content/post`);
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join(`src/content/post`, `${slug}.md`))
    .toString();

  const parseMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parseMarkdown.content);

  return {
    props: {
      contents: htmlString,
      data: parseMarkdown.data,
    },
  };
};

export default Post;
