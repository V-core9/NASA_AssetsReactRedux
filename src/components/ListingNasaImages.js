import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startSearch, setSearchQ, setYearEnd, setYearStart } from '../store/nasaImagesSlice';

import NasaImageListingItem from './NasaImageListingItem';


function ListingNasaImages() {
    const { collection, search } = useSelector(x => x.nasaImages);

    if (collection.items === undefined) return '';

    return (
        <nasa_image_listing>
            {collection.items.map(item => <NasaImageListingItem data={item} />)}
        </nasa_image_listing>
    )
}

export default ListingNasaImages;