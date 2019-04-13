/**
 * This is a typical example of a Dumb Component
 */
import React from 'react'


export const TableFooter = ({colSize, title}) => {
    return(
        <tfoot>
            <tr>
                <td  style={{textAlign:"center"}}  className="display-4" colSpan={colSize}>{title}</td>
            </tr>
        </tfoot>
    )
};
