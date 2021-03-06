import React from 'react'

import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions/promotor";

export default function SearchPromotor({ onChange,onBlur,selected }) {
    const dispatch = useDispatch();
    const { promoFilterLoading, promotorFilter } = useSelector(({ promotor }) => promotor);
    const handleInputChange = (inputValue, actionMeta) => {
        inputValue.length >= 2 && dispatch(filter(inputValue));
    }
    return (
        <Select
            isLoading={promoFilterLoading}
            placeholder="¿Quién lo contactó?"
            instanceId="searchPromotorFilter"
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
            noOptionsMessage={({ inputValue }) => !inputValue ? 'Debe digitar' : "No se encontraron resultados"}
            name="searchPromotorFilter"
            className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
            loadingMessage={() => 'Cargando...'}   //minor type-O here
            onInputChange={handleInputChange}
            isClearable={true}
            onChange={onChange}
            options={promotorFilter}
            onBlur={onBlur}
            selected={selected}
        />
    )
}
