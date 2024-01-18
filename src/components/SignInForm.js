import React, { useState } from 'react';
import './RegistrtationForm.css';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and server submission code goes here
        console.log({ email, password });
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <div className="form-title">Авторизация</div>
                <form onSubmit={handleSubmit}>
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
                            type="password"
                            id="password"
                            placeholder='Пароль'
                            value={password}
                            onChange={(e) => handleChange(e, setPassword)}
                        />
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
}

export default SignInForm;