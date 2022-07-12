import { NavLink } from 'react-router-dom';
function NasaImageListingItem(props) {
    const { href, data, links } = props.data;
    return (
        <NavLink to={"/post/" + data[0].nasa_id} >
            <nasa_image_thumbnail style={{ backgroundImage: `url(` + links[0].href + `)` }}>
                <h2>{data[0].title}</h2>
            </nasa_image_thumbnail>
        </NavLink>
    )
}

export default NasaImageListingItem;