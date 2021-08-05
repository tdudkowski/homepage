import * as React from "react"
import { Link, graphql } from "gatsby"
import LayoutBlog from "../../components/layout-blog"
import SEO from "../../components/seo"

const GatsbyBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / wpisy o Gatsbym`
    const path = location.pathname
    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;

    return (<LayoutBlog path={path}>
        <SEO title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} />
        <article>
            <h3>Das ist Enigma</h3>

            <p>Druga seria na blogu to cztery wpisy dotyczące hitlerowskiej maszynie szyfrującej Enigma.</p>

            <p></p>

            <h3>Dotychczasowe wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog/${slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

            <h3>Co dalej?</h3>

            <p>Plan:</p>

            <ul>
                <li>Historia Enigmy, dekryptaż i wpływ.</li>
                <li>Opis działania mechanizmu szyfrującego Enigmy, z kontekstem matematycznym i kryptologicznym</li>
                <li>Reko</li>
            </ul>

            <p>Ten adres: `https://dygresje.info/blog/enigma` zostaje i nie ulegnie zmianie.</p>

        </article>
    </LayoutBlog >)
}
//^.(\bgatsby\b)?.$
export default GatsbyBlog

export const query = graphql`
        query AllEnigmaBlogPosts {
            allMdx(
                filter: {fileAbsolutePath: {glob: "**/src/content/blogposts/*.mdx" }, frontmatter : {set : {eq: "enigma" } } }
        sort: {order: ASC, fields: frontmatter___date }
        ) {
            nodes {
            frontmatter {
            title
            section
        subsection
        description
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
        body
        }
      }
    }
        `;