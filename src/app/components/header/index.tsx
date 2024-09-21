import { Logo } from "./logo";
import './styles.scss'

export function Header() {
    return (
        <header>
            <Logo />

            <strong className='welcome'>Bem-vindo de volta, Alex</strong>

            <span>
                <time dateTime="01/12/2025">Segunda, 01 de dezembro de 2025</time>
            </span>
        </header>)
}