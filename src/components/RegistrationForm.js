import React, { useState } from 'react';
import './RegistrtationForm.css'
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
        // Здесь может быть код для валидации и отправки данных на сервер
        console.log({ name, email, phone, password, confirmPassword });
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <div className="form-title">Регистрация</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" style={{marginBottom: '-4px'}}>Имя</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => handleChange(e, setName)}
                        />
                    </div>
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
                        <label htmlFor="phone" style={{marginBottom: '-4px'}}>Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => handleChange(e, setPhone)}
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
                    <div>
                        <label htmlFor="confirmPassword" style={{marginBottom: '-4px'}}>Повторите пароль</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => handleChange(e, setConfirmPassword)}
                        />
                    </div>
                    <button type="submit">Присоединиться к работе</button>
                </form>
            </div>

        </div>


    );
}

export default RegistrationForm;
//
// import React, { useState } from 'react';
// import './RegistrationForm.css';
//
// function RegistrationForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         password: '',
//         confirmPassword: '',
//     });
//
//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value
//         }));
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(formData);
//         // Здесь код для валидации и отправки данных на сервер
//     };
//
//     return (
//         <div className="page-container">
//             <div className="form-container">
//                 <h1 className="form-title">Регистрация</h1>
//                 <form onSubmit={handleSubmit}>
//                     {Object.entries(formData).map(([key, value]) => (
//                         <div key={key}>
//                             <label htmlFor={key}>{key}</label>
//                             <input
//                                 type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
//                                 id={key}
//                                 name={key}
//                                 value={value}
//                                 onChange={handleChange}
//                                 className={value ? "has-content" : ""}
//                             />
//                         </div>
//                     ))}
//                     <button type="submit">Присоединиться к работе</button>
//                 </form>
//             </div>
//         </div>
//     );
// }
//
// export default RegistrationForm;


