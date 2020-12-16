

const stateDefault = {

    arrStaff: [

        // { stt: '1', maNV: 'NV01', tenNV: 'Tiến', email: 'tien@gmail.com', matKhau: '123', soDt: '0936348179' },
        // { stt: '2', maNV: 'NV02', tenNV: 'Tuấn', email: 'tuan@gmail.com', matKhau: '456', soDt: '0939090909' },

    ],
    arrStaffUpdate: {
        stt: '',
        maNV: '',
        tenNV: '',
        email: '',
        matKhau: '',
        soDt: ''
    }

}

export const FormReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'THEM_NHAN_VIEN': {
            // thêm dữ liệu vào arrStaff
            const arrStaffUpdate = [...state.arrStaff, action.nhanV];
            state.arrStaff = arrStaffUpdate;
            return { ...state }
            // console.log(action)
        }; break;


        case 'XOA_NHAN_VIEN': {
            // sao chép mảng nhân viên dã cập nhật
            const mangNhanVienCapNhat = [...state.arrStaff];
            mangNhanVienCapNhat = mangNhanVienCapNhat.filter(nv => nv.maNV !== action.xoa);
            state.arrStaff = mangNhanVienCapNhat;
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }

}