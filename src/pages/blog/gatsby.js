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
            <h3>Hello, Gatsby!</h3>

            <p>Bloga rozpoczynam serią wpisów o <a href="https://www.gatsbyjs.com/">Gatsbym</a>, popularnym i coraz popularniejszym frameworku Reacta.</p>

            <p>Zainteresowanym Gatsbym polecam darmowy kurs Przeprogramowanych: <a href="https://przeprogramowani.pl/darmowy-kurs-gatsby">Gatsby - krok po kroku, od zera do gotowej aplikacji</a>, jest to seria, w tej chwili siedmiu artykułów, na pewno wartych przeczytania. Lektura obowiązkowa.</p>

            <h3>Dotychczasowe wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog/${slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

            <h3>Plan</h3>

            <ul>
                <li>Blog cz. 1. MDX, programistyczne tworzenie stron z gastby-node.js i File System Route API</li>
                <li>Blog cz. 2, automatyczne generowanie tagów...</li>
                <li>Headless CMS</li>
                <li>PWA, SSR</li>
            </ul>

            <p>Plan ten, szczególnie od odcinka o deployu jest dość płynny, ale większość treści jest już napisana, więc zostanie zrealizowany. Kolejne odcinki powinny być publikowane przynajmniej raz w tygodniu.</p>

            <h3>Założenia</h3>

            <p>Nie tylko plan jest płynny, sama seria wpisów również będzie podlegać zmianom i uaktualnieniom. Jako osobny odcinek powstanie aktualizowany spis treści z dokładnym opisem zawartości - więc ostatecznie będzie to też kurs rozciągnięty na wiele odcinków bloga.</p>

            <p>Co zaś do formuły treści: mnie najbardziej interesuje nie teoria a konkretny sposób budowania rzeczy. Więcej się nauczyłem z analizy kodu niż kilobajtów dokumentacji (ma to też wiele wad, więc nie zalecam; niech każdy robi tak jak lubi/chce/musi, w tej kolejności). Dlatego czasem będzie to prezentacja większych fragmentów kodu z kilkoma ważnymi elementami i w miarę dokładnym opisem tego, co się tam dzieje. Uważam, że jest to szybsze niż składanie działającej maszyny z drobnych porozrzucanych po całym artykule kawałków. Mając od razu działający kod szybko można przejść do eksperymentów i łatwiej zapamiętać to, co się udało zrozumieć.</p>

            <p>Założeniem każdego odcinka serii jest bycie success-complete, chodzi o to, żeby po przeczytaniu można było coś zbudować. W tym odcinku zobaczysz własną stronę w Gatsbym.</p>

            <p>Zakładam, że czytelnik dobrze zna podstawy JS, rozumie jak działa React i zna <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>, używa gita, umie poruszać się w konsoli i wie jak działa strona WWW. Pisząc o konsoli, mam na myśli konsolę linuksową i naprawdę tylko podstawowe polecenia typu cd, mkdir, rm, ls.</p>

            <p>Postaram się też odróżniać kiedy używamy mechanizmów Gatsby'ego, kiedy samego Reacta, a kiedy jest to sam JS.</p>



        </article>
    </LayoutBlog>)
}
//^.(\bgatsby\b)?.$
export default GatsbyBlog

export const query = graphql`
        query AllGatsbyBlogPosts {
            allMdx(
                filter: {fileAbsolutePath: {glob: "**/src/content/blogposts/*.mdx" }, frontmatter : {tags : {ne: "sth" } } }
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