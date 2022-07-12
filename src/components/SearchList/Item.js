import { NavLink } from 'react-router-dom';

function SearchListItem(props) {
    const { data, links } = props.data;
    return (
        <NavLink to={"/post/" + data[0].nasa_id} >
            <thumbnail style={{ backgroundImage: `url(` + links[0].href + `)` }}>
            </thumbnail>
            <info>
                <h3>{data[0].title}</h3>
                {data[0].photographer && <p>📸 Photographer: {data[0].photographer}</p>}
                {data[0].location && <p>📍 Location: {data[0].location}</p>}
            </info>
        </NavLink>
    )
}

export default SearchListItem;