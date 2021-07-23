import * as React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo"
import LayoutBlog from "../components/layout-blog"

const blogPage = ({ data, location }) => {

    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;

    const tag = location.pathname.slice(10)
    const path = location.pathname
    const headerTitle = `dygresje.info / blog: tag: ${tag}`

    const filteredPosts = [...data.allMdx.nodes].filter(item => item.frontmatter.tags.includes(tag))

    return (
        <LayoutBlog path={path}>
            <SEO title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} />
            <h2>Posty z tagiem <span>{tag}</span></h2>
            <section>
                {filteredPosts.map(({ id, frontmatter, slug }) => (
                    <li key={id}>
                        <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
                        <span> - {frontmatter.subsection}</span>
                    </li>
                ))}
            </section>
        </LayoutBlog>
    );
};

export default blogPage

export const query = graphql`
query AllTags {
     allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/content/blogposts/*.mdx" } }
      sort: { order: ASC, fields: frontmatter___date }
      ) {
              nodes {
                  frontmatter {
            title
            section
            subsection
            tags
            image {
                childImageSharp {
                gatsbyImageData(
                    width: 200
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                        )
                    }
                }
            }
            slug
            id
         }
      }
    }
`;

