import React, { useState } from 'react';
import './RegistrtationForm.css';

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and server submission code goes here
        console.log({ name, email, phone, password, confirmPassword });
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <div className="form-title">Регистрация</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="name"
                            placeholder='Имя'
                            value={name}
                            onChange={(e) => handleChange(e, setName)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => handleChange(e, setEmail)}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="phone"
                            placeholder='Телефон'
                            value={phone}
                            onChange={(e) => handleChange(e, setPhone)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder='Пароль'
                            value={password}
                            onChange={(e) => handleChange(e, setPassword)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder='Повторите пароль'
                            value={confirmPassword}
                            onChange={(e) => handleChange(e, setConfirmPassword)}
                        />
                    </div>
                    <button type="submit">Приступить к работе</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
