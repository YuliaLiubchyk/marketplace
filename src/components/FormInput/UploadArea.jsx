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
        onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => onChange(name, [event.target.result]);
        }
        }>
        <div className={s['upload-list']}>
            <div className={s['upload-container']}>
                <input
                    type="file"
                    accept=".png, .jpg"
                />
                <hr />
                <hr className={s.horizontal} />
            </div>
            {/* <UploadedFiles value={value} /> */}
        </div>
    </div>
}

export default UploadArea;