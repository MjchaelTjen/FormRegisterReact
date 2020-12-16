import React, { Component } from 'react'

import { connect } from 'react-redux'

class FormComponent extends Component {

    constructor(props) {
        super(props);
        // đặt tên thuộc tính values là name của control input
        this.state = {
            values: {
                stt: '',
                maNV: '',
                tenNV: '',
                email: '',
                matKhau: '',
                soDt: ''
            },
            // thuộc tính errors là tên các lỗi ứng với các thuộc tính values
            errors: {
                stt: '',
                maNV: '',
                tenNV: '',
                email: '',
                matKhau: '',
                soDt: ''
            }
        }


    }

    // kiểm tra validation
    validateInput = (name, value) => {
        let errorMessenger = '';
        if (name === 'maNV') {
            if (!value) {
                errorMessenger = 'Tài khoản không được bỏ trống !!!'
            }
        }
        if (name === 'tenNV') {
            if (!value) {
                errorMessenger = 'Tên không được bỏ trống !!!'
            }
        }
        if (name === 'matKhau') {
            if (!value) {
                errorMessenger = 'Mật khẩu không được bỏ trống !!!'
            }
        }
        if (name === 'soDt') {
            if (!value) {
                errorMessenger = 'Số điện thoại không được bỏ trống !!!'
            } else if (! /^[0-9]+$/.test(value)) {
                errorMessenger = 'Số điện thoại không hợp lệ !!!'
            }
        }
        if (name === 'email') {
            if (!value) {
                errorMessenger = 'Email không được bỏ trống !!!'
            } else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)) {
                errorMessenger = 'Email không hợp lệ !!!'

            }
        }
        return errorMessenger;
    }

    renderErrors = (errorMessenger) => {
        if (errorMessenger !== '') {
            return <div style={{ color: 'danger' }}>{errorMessenger}</div>
        }
        return '';
    }

    // xự kiện xử lí dữ liệu mỗi lần người dùng nhập dữ liệu (onChange) sẽ dựa vào name để lấy value của thẻ input đó    
    handleChange = (event) => {
        const { name, value } = event.target;
        // set state tương ứng với name của reducer ( tính năng object literal động về thuộc tính)
        this.setState({ values: { ...this.state.values, [name]: value } }, () => console.log(this.state.values))
    }

    handleBlur = (event) => {
        const { name, value } = event.target;
        // Hàm này check validation được định nghĩa bên dưới
        const errosMesenger = this.validateInput(name, value);
        this.setState({ errors: { ...this.state.errors, [name]: errosMesenger } });
    }

    handleSubmit = (event) => {
        event.preventDefault(); // cản sự kiện submit reload lại trang của browser 
        this.props.themNhanVien(this.state.values)
    }


    render() {
        return (

            <div>
                <div className='card-header text-left bg-dark text-white'><h3>Form đăng ký</h3></div>
                <div className='text-left'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold' }}>Tài khoản</label>
                                <input name='maNV' value={this.state.values.maNV} onChange={this.handleChange} onBlur={this.handleBlur} type="" placeholder='Nhập tên' className="form-control " />
                                {this.state.errors.maNV}
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold' }}>Họ tên</label>
                                <input name='tenNV' value={this.state.values.tenNV} onChange={this.handleChange} onBlur={this.handleBlur} type="" placeholder='Nhập tên' className="form-control" />
                                {this.state.errors.tenNV}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold' }}>Mật khẩu</label>
                                <input name='matKhau' value={this.state.values.matKhau} onChange={this.handleChange} onBlur={this.handleBlur} className="form-control" placeholder="Nhập mật khẩu" />
                                {this.state.errors.matKhau}
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputPassword1" style={{ fontWeight: 'bold' }}>Số điện thoại</label>
                                <input name='soDt' value={this.state.values.soDt} onChange={this.handleChange} onBlur={this.handleBlur} type="" className="form-control" placeholder="Nhập số điện thoại" />
                                {this.state.errors.soDt}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="form-group col-6">
                                <label htmlFor="exampleInputEmail1" style={{ fontWeight: 'bold' }}>Email</label>
                                <input name='email' value={this.state.values.email} onChange={this.handleChange} onBlur={this.handleBlur} type="email" className="form-control" placeholder="Nhập email" />
                                {this.state.errors.email}
                            </div>
                            <div className="form-group col-6">
                                <label for="exampleFormControlSelect1" style={{ fontWeight: 'bold' }}>Tùy chọn người dùng</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Công ty</option>
                                    <option>Khách hàng cá nhân</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mr-5">Đăng ký</button>
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>

        )
    }

}

const mapDispathToProps = (dispatch) => {
    return {
        themNhanVien: (nhanV) => {
            const action = {
                type: 'THEM_NHAN_VIEN',
                nhanV
            }
            dispatch(action);
        }
    }
}


export default connect(null, mapDispathToProps)(FormComponent)