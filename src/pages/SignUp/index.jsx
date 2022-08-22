import './styles.css'
import * as React from 'react'
import signup__img from '../../assets/images/img-signup.png'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [form, setForm] = React.useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let users = []

        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'))
        }

        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))

        setForm({
            name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        })
    }

    return (
        <Container>
            <section className="sign-up">
                <img className='sign-up__img' src={signup__img} alt='Pessoa de costas observando um lago e uma montanha.' />

                <form
                    className="sign-up__form"
                    onSubmit={handleSubmit}
                >
                    <h1 className="sign-up__title">Cadastro</h1>

                    <div className="input__group">
                        <label htmlFor="email" className="sign-up__label">
                            E-mail
                        </label>
                        <input
                            id="email"
                            className="sign-up__input"
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="sign-up__group">
                        <div className="input__group">
                            <label htmlFor="name" className="sign-up__label">
                                Nome
                            </label>
                            <input
                                id="name"
                                className="sign-up__input"
                                type="text"
                                name="name"
                                placeholder="Digite seu nome"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input__group">
                            <label htmlFor="last_name" className="sign-up__label">
                                Sobrenome
                            </label>
                            <input
                                id="last_name"
                                className="sign-up__input"
                                type="text"
                                name="last_name"
                                placeholder="Digite seu sobrenome"
                                value={form.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="sign-up__group">
                        <div className="input__group">
                            <label htmlFor="password" className="sign-up__label">
                                Senha
                            </label>
                            <input
                                id="password"
                                className="sign-up__input"
                                type="password"
                                name="password"
                                placeholder="Digite sua senha"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input__group">
                            <label htmlFor="confirm_password" className="sign-up__label">
                                Confirmação de senha
                            </label>
                            <input
                                id="confirm_password"
                                className="sign-up__input"
                                type="password"
                                name="confirm_password"
                                placeholder="Digite novamente sua senha"
                                value={form.confirm_password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="sign-up__button__group">
                        <button className="sign-up__button">Cadastre-se</button>
                        
                        {
                            warning.show 
                            && 
                            <span className='warning'>{ warning.message }</span>
                        }

                        <Link to="/" className="sign-in__link">
                            <button className="sign-in__button">Login</button>
                        </Link>
                    </div>
                </form>
            </section>
        </Container>
    )
}