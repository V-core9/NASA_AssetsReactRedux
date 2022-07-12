import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startSearch, setSearchQ, setYearEnd, setYearStart, goToNextPage, goToPrevPage, startNewSearch, goToPage } from '../store/nasaImagesSlice';


import ListingNasaImages from '../components/ListingNasaImages';

function HomePage() {
    const dispatch = useDispatch();
    const { collection, status, search } = useSelector(x => x.nasaImages);

    let totalPages = Math.ceil((collection?.metadata?.total_hits || 0) / 100);

    if (totalPages > 100) totalPages = 100;

    let paginationOptions = [];

    const submittinForm = (e) => {
        e.preventDefault();
        dispatch(startNewSearch(search));
    };

    useEffect(() => {
        dispatch(startSearch(search));
        console.log(collection);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    for (let i = 1; i <= totalPages; i++) {
        paginationOptions.push((search.page === i) ? <option value={i} selected>{i}</option> : <option value={i} >{i}</option>);
    }

    return (
        <div>

            <form onSubmit={submittinForm}>
                <heading>
                    <h2>Search Form</h2>
                    {status === 'idle' && <p>👥 Idle.</p>}
                    {status === 'loading' && <p>➰ Loading...</p>}
                    {status === 'error' && <p>🔻 Error.</p>}
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

            <ListingNasaImages />

            <footer>
                <info>
                    <p>version: {collection?.version}</p>
                    <p>Total Hits: {collection?.metadata?.total_hits}</p>
                </info>
                <pagination>
                    <button type="button" onClick={(e) => dispatch(goToPrevPage())}>◀ Prev</button>
                    <p>Page #{search.page} of {totalPages}</p>
                    <select onChange={(e) => dispatch(goToPage(e.target.value))}>
                        {paginationOptions}
                    </select>
                    <button type="button" onClick={(e) => dispatch(goToNextPage())}>Next ▶</button>
                </pagination>
            </footer>
        </div>
    );
};

export default HomePage;