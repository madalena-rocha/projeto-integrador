import './styles.css'
import * as React from 'react'
import signin__img from '../../assets/images/img-signin.png'
import Container from '../../components/Container'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const navigate = useNavigate()

    const [form, setForm] = React.useState({
        email: '',
        password: ''
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

            const user = users.find(u => u.email === form.email && u.password === form.password)

            if (user) {
                localStorage.setItem('token', user.email)
                setWarning({
                    show: false,
                    message: ''
                })
                navigate('/profile')
            } else {
                setWarning({
                    show: true,
                    message: 'Usuário ou senha inválidos!'
                })
            }
        } else {
            setWarning({
                show: true,
                message: 'Nenhum usuário cadastrado!'
            })
        }
    }

    return (
        <Container>
            <section className="sign-in">
                <form
                    className="sign-in__form"
                    onSubmit={handleSubmit}
                >
                    <h1 className="sign-in__title">Login</h1>

                    <label htmlFor="email" className="sign-in__label">
                        E-mail
                    </label>
                    <input
                        id="email"
                        className="sign-in__input"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" className="sign-in__label">
                        Senha
                    </label>
                    <input
                        id="password"
                        className="sign-in__input"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <div className="sign-in__button__group">
                        <button className="sign-in__button">Login</button>

                        {
                            warning.show 
                            && 
                            <span className='warning'>{ warning.message }</span>
                        }

                        <Link to="/sign-up" className="sign-up__link">
                            <button className="sign-up__button">Cadastre-se</button>
                        </Link>
                    </div>
                </form>

                <img className='sign-in__img' src={signin__img} alt='Pessoa de costas observando a aurora boreal.' />
            </section>
        </Container>
    )
}