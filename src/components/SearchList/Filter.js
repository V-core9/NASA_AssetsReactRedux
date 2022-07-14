import { useSelector, useDispatch } from 'react-redux';
import { setSearchQ, setYearEnd, setYearStart, startNewSearch } from '../../store/nasaImagesSlice';


function SearchListFiler() {
    const dispatch = useDispatch();
    const { collection, status, search } = useSelector(x => x.nasaImages);

    let totalPages = Math.ceil((collection?.metadata?.total_hits || 0) / 100);

    if (totalPages > 100) totalPages = 100;

    const submittinForm = (e) => {
        e.preventDefault();
        dispatch(startNewSearch());
    };

    return (
        <filter>
            <form onSubmit={submittinForm}>
                <heading>
                    <h2>Search Form</h2>
                </heading>
                <content>
                    <form_group>
                        <label for="search_q">String Query</label>
                        <input type="text" id="search_query_string" name='search_q' value={search.q} onChange={(e) => dispatch(setSearchQ(e.target.value))} />
                    </form_group>

                    <form_group>
                        <label for="search_q">Start Year</label>
                        <input type="number" value={search.yearStart} onChange={(e) => dispatch(setYearStart(e.target.value))} />
                    </form_group>

                    <form_group>
                        <label for="search_q">End Year</label>
                        <input type="number" value={search.yearEnd} onChange={(e) => dispatch(setYearEnd(e.target.value))} />
                    </form_group>

                    <button type="submit">Search</button>
                </content>
            </form>
        </filter>
    )
}

export default SearchListFiler;