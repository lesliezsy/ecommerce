import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {/* 先做一個 Ternary Operator 決定是否顯示 label */}
        {/* otherProps.value.length 代表檢測是否有輸入任何資料 */}
        { label ? (<label className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`}>{ label }</label>) : null }
    </div>
)

export default FormInput;