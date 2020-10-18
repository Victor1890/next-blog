import fs from "fs";
import matter from "gray-matter";
import path from "path";

const Test = ({ posts }) => {
  return (
    <div>
      {posts.map(({ frontmatter: { title, description, date } }) => (
        <article key={title}>
          <header>
            <h3>{title}</h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
        </article>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(`src/content/post`);
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/content/post/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);
    const options = { year: "numeric", month: "long", day: "numeric" };
    //const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      //date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Test;
