/*import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const registerLink = document.querySelector('.register-link');
        const loginLink = document.querySelector('.login-link');
        const btnPopup = document.querySelector('btnLogin-')

        if (registerLink) {
            registerLink.addEventListener('click', () => {
                if (wrapper) {
                    wrapper.classList.add('active');
                }
            });
        }

        return () => {
            if (registerLink) {
                registerLink.removeEventListener('click', () => {
                    if (wrapper) {
                        wrapper.classList.add('active');
                    }
                });
            }
        };
        if (loginLink) {
            loginLink.addEventListener('click', () => {
                if (wrapper) {
                    wrapper.classList.remove('active');
                }
            });
        }

        return () => {
            if (registerLink) {
                registerLink.removeEventListener('click', () => {
                    if (wrapper) {
                        wrapper.classList.add('active');
                    }
                });
            }
        };
    }, []); // Run once when the component mounts

    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default App;*/

import './App.css';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const registerLink = document.querySelector('.register-link');
        const loginLink = document.querySelector('.login-link');
        const btnPopup = document.querySelector('.btnLogin-popup');
        const iconClose = document.querySelector('.icon-close');
        const handleRegisterClick = () => {
            if (wrapper) {
                wrapper.classList.add('active');
            }
        };

        const handleLoginClick = () => {
            if (wrapper) {
                wrapper.classList.remove('active');
            }
        };

        const handleButtonClick=() =>{
            if(wrapper){
                wrapper.classList.add('active-popup');
            }
        };
        const handleIconClick=() =>{
            if(wrapper){
                wrapper.classList.remove('active-popup');
            }
        }
        if (registerLink) {
            registerLink.addEventListener('click', handleRegisterClick);
        }

        if (loginLink) {
            loginLink.addEventListener('click', handleLoginClick);
        }

        if(btnPopup){
            btnPopup.addEventListener('click',handleButtonClick);
        }
        if(iconClose){
            iconClose.addEventListener('click',handleIconClick);
        }
        return () => {
            if (registerLink) {
                registerLink.removeEventListener('click', handleRegisterClick);
            }

            if (loginLink) {
                loginLink.removeEventListener('click', handleLoginClick);
            }

            if(btnPopup){
                btnPopup.removeEventListener('click',handleButtonClick);
            }

            if(iconClose){
                iconClose.removeEventListener('click',handleIconClick);
            }
        };
    }, []); // Run once when the component mounts

    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default App;

