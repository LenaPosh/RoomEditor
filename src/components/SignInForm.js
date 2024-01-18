import React, { useState } from 'react';
import './RegistrtationForm.css'
function SignInForm() {
    // Состояния для каждого поля ввода
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // код для валидации и отправки данных на сервер
        console.log({ email, password});
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <div className="form-title">Авторизация</div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email" style={{marginBottom: '-4px'}}>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => handleChange(e, setEmail)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" style={{marginBottom: '-4px'}}>Пароль</label>
                        <input
                            type="password"
                            id="password"
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