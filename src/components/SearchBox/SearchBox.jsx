import React from "react";
import s from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const filter = useSelector(state => state.filters.name);

    const dispatch = useDispatch();


    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div>
            <label className={s.searchBox}>
                <span className={s.inputName}>Find contacts by name</span>
                <input className={s.searchInput} name='searchField' type="text" value={filter} onChange={handleChange} />
            </label>
        </div>
    );
};

export default SearchBox;