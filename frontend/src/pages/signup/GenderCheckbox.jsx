import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex mt-2'>
            <div className="form-control">
                <label className={`cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>&nbsp;&nbsp;
                    <input type="checkbox"  className="checkbox checkbox-success" checked={selectedGender === "male"} onChange={() => {
                        onCheckboxChange("male")
                    }} />
                </label>
            </div>
            <div className="form-control">
                <label className={`cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>&nbsp;&nbsp;
                    <input type="checkbox"  className="checkbox checkbox-success" checked={selectedGender === "female"} onChange={() => {
                        onCheckboxChange("female")
                    }} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox;