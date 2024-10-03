import React, { useState } from 'react';
import './Authentication.css';

const Authentication = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="authentication">
            <div className="loginTitle">
                <h1>ВХІД</h1>
            </div>
            <div className="loginForm">
                <div className="username-field">
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Логін"
                    />
                </div>
                <div className="password-field">
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Пароль"
                    />
                </div>
                <div className="forgotPassword">
                        <a href="#">Забули пароль?</a>
                    </div>
                <div className="button-container">
                   
                    <button type="submit">Логін</button>
                </div>
            </div>
        </div>
    );
};

export default Authentication;