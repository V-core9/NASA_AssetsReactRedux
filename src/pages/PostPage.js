import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
    const { id } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`, requestOptions)
            .then(response => response.text())
            .then(result => setData(JSON.parse(result)))
            .catch(error => console.log('error', error));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const info = data.collection?.items[0].data[0] || {};
    console.log(data);

    return (
        <single_post_view>

            <nav>
                <button onClick={(e) => window.history.back()}>Back</button>
            </nav>

            <article>
                <gallery>
                    <img src={data.collection?.items[0].links[0].href} alt={info.title} />
                </gallery >

                <info>
                    <section className="baseInfo">
                        <h2>{info.title}</h2>

                        <div dangerouslySetInnerHTML={{ __html: info.description }}></div>
                    </section>
                    <section className="keywords">
                        <h2>Keywords:</h2>
                        <keywords>
                            {info.keywords?.map(item => <p>{item}</p>)}
                        </keywords>
                    </section>
                    <section>
                        <h2>Additional Info:</h2>
                        {info.photographer && <p>📸 Photographer: {info.photographer}</p>}
                        {info.location && <p>📍 Location: {info.location}</p>}
                        <small>Post ID: {id}</small>
                    </section>
                </info>

            </article>

        </single_post_view>
    );
};

export default PostPage;
