import React, {Component} from 'react'
import {TableHeader} from './Sectionals/TableHeader';
import {TableBody} from './Sectionals/TableBody';
import {TableFooter} from './Sectionals/TableFooter';


class SimpleTable extends Component {

    render() {

        const {headers, content,title}  = this.props;
        return (
            <table className="col-lg-12 table table-striped ">
                <TableHeader headers={headers} />
                <TableBody content={content} />
                <TableFooter colSize={headers.length}
                             title = {title}/>
            </table>
        )
    }
}

export default SimpleTable;
