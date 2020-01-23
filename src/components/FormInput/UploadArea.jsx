import React from 'react';
import s from './FormInput.module.scss';

const UploadArea = ({ name, value, onChange, ...rest }) => {
    const UploadedFiles = ({ value }) => {
        return <>
            {value.map((el, index) => <div key={index}>{el}</div>)}
        </>
    }
    return <div
        {...rest}
        onChange={(e) => onChange(name, [e.target.value, ...value])}>
        <div className={s['upload-list']}>
            <div className={s['upload-container']}>
                <input
                    type="file"
                    accept=".png, .jpg"
                />
                <hr />
                <hr className={s.horizontal} />
            </div>
            <UploadedFiles value={value} />
        </div>
    </div>
}

export default UploadArea;