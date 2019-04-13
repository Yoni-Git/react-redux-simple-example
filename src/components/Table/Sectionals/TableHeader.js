/**
 * This is a typical example of a Dumb Component
 /**
 * I Expect a headers
 * {
 *  {header1, header2, header3 }
 * }
 * @param content
 * @returns {*}
 * @constructor
 */
import React from 'react'



export const TableHeader = ({headers}) => {
    return(
        <thead>
            <tr>
            {headers && headers.map((header,index) => {
                return (
                    <th key={index} scope="col" className="text-uppercase">{header}</th>
                );
            })}
            </tr>

        </thead>
    )
};
