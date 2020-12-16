import React, { Component } from 'react'
import FormComponent from './FormComponent'
import TableComponent from './TableComponent'

export default class BaiTapFormDangKy extends Component {
    render() {
        return (
            <div className='container'>
                <FormComponent />
                <TableComponent />
            </div>
        )
    }
}
