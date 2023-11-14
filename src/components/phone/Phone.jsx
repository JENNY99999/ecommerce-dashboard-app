import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import './phone.css'


const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div>
            <label>
                <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                    }}

                />
            </label>
            {!valid && (
                <p>Please enter a valid phone number.</p>
            )}
        </div>
    );
};


export default Phone



