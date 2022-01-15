import React from 'react'

import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions/comitegremial";
import { useEffect } from 'react';

export default function SearchComiteGremial({ onChange,onBlur,selected }) {
    const dispatch = useDispatch();
    const {comiteGremialFilterLoading,comiteGremialFilter} = useSelector(({ comitegremial }) => comitegremial);
    useEffect(() => {
      dispatch(filter());
    }, [dispatch])
    return (
        <Select
        isLoading={comiteGremialFilterLoading}
            placeholder="Comité gremial *"
            instanceId="SearchComiteGremialFilter"
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    border: "none"
                }),
                input: (base) => ({
                    ...base,
                    'input:focus': {
                        boxShadow: 'none',
                    },
                }),
            }}
            name="SearchComiteGremialFilter"
            className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
            onChange={onChange}
            onBlur={onBlur}
            selected={selected}
            options={comiteGremialFilter}
            value={comiteGremialFilter.find(c=>c.value === selected)}
        />
    )
}
