import { Link } from "react-router-dom"
import style from "./About.module.css"

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sobre o mini blog</h1>

      <p>Projeto Feito em react + Firebase no Back</p>

      <Link to='/createpost'>Criar Post</Link>

    </div>

  )
}

export default About