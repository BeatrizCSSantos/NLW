import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="illustration symbolizing Questions and Answers" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiencia em tempo-real</p>
                <main>
                    <div>
                        <img src={logoImg} alt="Letmeask" />
                        <button>
                            <img src={googleImg} alt="" />
                            Crie sua sala com o Google
                        </button>
                        <div> ou entre em uma sala</div>
                        <form>
                            <input 
                            type="text" 
                            placeholder="Digite um código da sala"
                            />
                            <button type="submit">
                                Entrar na sala
                            </button>
                        </form>
                    </div>
                </main>
            </aside>
        </div>
    )
}