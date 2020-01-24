import React, { useState } from 'react';
import s from './FormInput.module.scss';

const UploadArea = ({ name, value, onChange, ...rest }) => {
    const [filesNames, setFilesNames] = useState([]);

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFilesNames([file.name]);
        reader.onload = (event) => onChange(name, [event.target.result]);
    };

    return <div
        {...rest}
        onChange={uploadFile}>
        <div className={s['upload-list']}>
            <div className={s['upload-container']}>
                <input
                    type="file"
                    accept=".png, .jpg"
                />
                <hr />
                <hr className={s.horizontal} />
            </div>
            {
                filesNames.map((el, index) =>
                    <div key={index}>
                        {el}
                    </div>)
            }
        </div>
    </div>
}

export default UploadArea;