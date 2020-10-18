import { Fragment } from "react";
import MD from "react-markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Header from "../../components/header";

const Post = ({ contents, data }) => {
  return (
    <Fragment>
      <Header title={data.title} description={data.description} />
      <div className="grid grid-cols-2 gap-2">
        <div className="mx-auto">
          <article
            className="container px-4 py-2 m-2"
            dangerouslySetInnerHTML={{ __html: contents }}
          />

          {/* <MD source={contents} /> */}
          <div className="container"></div>
        </div>
      </div>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(`src/content/post`);
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "").replace(" ", "-"),
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
