import React from 'react';
import "./TableHeader.css"

function TableHeader(props) {
    return(
<thead className="data-area">
<th></th>
<th onClick={props.name} className="hover">Name (click to sort)</th>
<th >Phone Number</th>
<th>Email</th>
</thead>

    )
}

export default TableHeader;