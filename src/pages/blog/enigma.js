import * as React from "react"
import { Link, graphql } from "gatsby"
import LayoutBlog from "../../components/layout-blog"
import SEO from "../../components/seo"
import backgroundImage from "../../content/images/Enigma-logo.jpg"

const GatsbyBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / wpisy o Gatsbym`
    const path = location.pathname
    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;

    return (<LayoutBlog path={path}>
        <SEO title={headerTitle} image={backgroundImage} />
        <article>
            <h3>Das ist Enigma</h3>

            <p>Druga seria wpisów na blogu miała pierwotnie dotyczyć hitlerowskiej maszyny szyfrującej Enigma. Taki był plan. Pierwszym elementem tego planu był opis historii kryptologii w okresie do Wielkiej Wojny po koniec Drugiej Wojny Światowej. Kiedy w końcu w trochę lepszej, lub trochę gorszej formie ten punkt planu zrealizowałem - okazało się, że jest to tekst stanowczo zbyt długi, więc nikt tego nie będzie czytał. Dlatego podzieliłem go na cztery części: wstęp, WWI, międzywojnie, WWII. W rezultacie główny temat serii - Enigma - nieco zeszła z pierwszego planu. Nic to jednak nie szkodzi. Enigmy nie będzie mniej, po prostu reszty będzie więcej. Tytuł serii jest dość uniwersalny i pasuje do kryptologii zawsze, niezależnie od tego ile jest Enigmy w Enigmie. A tej będzie tu wystarczająca ilość.</p>

            <p>Zainteresowanych kryptologią zapraszam do lektury artykułu na tej stronie: <Link to="/it/kryptologia">Kryptologia praktycznie</Link></p>

            <h3>Dotychczasowe wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog/${slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

            <h3>Co dalej?</h3>

            <p>Część historyczna jest już napisana i zostanie zamknięta w tym tygodniu. Starałem się zrobić ją jak najdokładniej, ale jestem przekonany, że jest w niej wiele błędów i jeszcze więcej niedopowiedzeń. To wynik kompromisu i decyzji, że lepsza jest spóźniona względem planu publikacja, niż przygotowanie materiału doskonałego i zwlekanie z publikacją ad calendas Graecas (taki los spotkał - jak dotąd - mój plan <a href="https://github.com/tdudkowski/t4">strony o Akcji T4</a>). Wpisy te będę poprawiał na bieżąco. W razie potrzeby - kontakt przez formularz kontaktowy na stronie lub <a href="https://www.facebook.com/dygresje.info/">facebooka dygresje.info</a>.</p>

            <p>Dwa ostatnie wpisy mają zupełnie inny charakter i działa to tak, że opis jest dobry jeżeli rekonstrukcja dobrze działa, więc dopiero wtedy będę mógł wrzucić opis - jeżeli reko da ten sam rezultat co inne rekonstrukcje online. Mam nadzieję, że uda się to zrobić do września.</p>

            <p>Plan:</p>

            <ul>
                <li>Historia Enigmy, dekryptaż i wpływ</li>
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