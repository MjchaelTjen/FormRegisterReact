import React, { Component } from 'react'

import { connect } from 'react-redux'

class TableComponent extends Component {


    renderDanhSach = () => {

        return this.props.arrStaff.map((ds, index) => {
            return <tr key={index}>
                <td>{ds.stt}</td>
                <td>{ds.maNV}</td>
                <td>{ds.tenNV}</td>
                <td>{ds.matKhau}</td>
                <td>{ds.email}</td>
                <td>{ds.soDt}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    this.props.dispatch(this.xoaNhanVien(this.maNV))
                }}>Xóa</button> <button className='btn btn-primary'>Sửa</button></td>

            </tr>
        })
    }

    render() {
        // console.log(this.props.arrStaff)
        return (
            <div className='mt-2'>
                <div className='text-white text-left bg-dark card-header'><h3>Danh sách người dùng</h3></div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Mật khẩu</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Kiểu khách hàng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSach()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        arrStaff: state.FormReducer.arrStaff
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        xoaNhanVien: (xoa) => {
            const action = {
                type: 'XOA_NHAN_VIEN',
                xoa
            }
            dispatch(action)
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)