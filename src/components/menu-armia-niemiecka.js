import * as React from "react"
import { Link } from "gatsby"

const MenuArmiaNiemiecka = () => {
    return (
        <>
            <p>HEJ HO</p>
            <p>Artykuł powstał przy okazji tworzenia niniejszej kroniki wojennej i jest posklejany kilku fragmentów kroniki i zredagowany, plus kilka rzeczy dodałem. Zakres tematyczny ściśle dotyczy treści kroniki.</p>

            <p>Inne artykuły dotyczące armii niemieckiej:</p>

            <ul>
                <li><Link to="/festung-breslau/article/wojsko-dlnslask">Wojsko na Dolnym Śląsku 1818-1945</Link></li>
                <li><Link to="/festung-breslau/article/ss">SS</Link></li>
                <li><Link to="/festung-breslau/article/volkssturm">Volkssturm</Link></li>
                <li><Link to="/festung-breslau/article/wunderwaff">Wunderwaffe</Link></li>
            </ul>

        </>
    )
}

export default MenuArmiaNiemiecka