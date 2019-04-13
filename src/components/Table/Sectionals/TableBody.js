/**
 * This is a typical example of a Dumb Component
 */
/**
 * I Expect a Grid of content
 * {
 * {header1Row1: content1Row1 , header2Row1:content2Row1 },
 * {header1Row2: content1Row2 , header2Row1:content2Row2 }
 * }
 * @param content
 * @returns {*}
 * @constructor
 */
import React from 'react'


export const TableBody = ({content}) => {
    return(
        <tbody>
        {
            content.map((row,rowIndex) => {
                return (
                    <tr key={rowIndex}>
                        {Object.values(row).map((tableData,index) => {
                            return (
                                <td key={index}>{tableData}</td>
                            );
                        })}
                    </tr>
                )
            })
        }

        </tbody>
    )
};
