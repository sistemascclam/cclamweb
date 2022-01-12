import React from 'react'

import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions/promotor";

export default function SearchPromotor({ setVal, defaultVal }) {
    const dispatch = useDispatch();
    const promotorFilter = useSelector(({ promotor }) => promotor.promotorFilter);
    const handleInputChange = (inputValue, actionMeta) => {
        inputValue.length >= 2 && dispatch(filter(inputValue));
    }
    return (
        <Select
            placeholder="¿Quién lo contactó?"
            instanceId="searchPromotorFilter"
            styles={{
                input: (base) => ({
                    ...base,
                    'input:focus': {
                        boxShadow: 'none',
                    },
                }),
            }}
            noOptionsMessage={({ inputValue }) => !inputValue ? 'Debe digitar' : "No se encontraron resultados"}
            name="searchPromotorFilter"
            className="w-80 mx-auto"
            onInputChange={handleInputChange}
            isClearable={true}
            onChange={(inputValue, actionMeta) => {
                setVal(inputValue != null ? inputValue.value : null);
            }}
            options={promotorFilter}
            defaultValue={defaultVal}
        />
    )
}
