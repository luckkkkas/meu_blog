import style from './CreatePost.module.css'
import { useState } from "react"

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div>
      <h1 className={style.title}>Criar Post</h1>      
      <h3 className={style.title}>Poste o que desejar, mas não o que não desejar!</h3>
      <form className={style.container}> 
        <label className={style.inputContainer}>
          <span>Título:</span>
          <input className={style.input} type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>
        <label className={style.inputContainer}>
          <span>Url da imagem:</span>
          <input className={style.input} type="url" value={url} onChange={(e)=>setUrl(e.target.value)}/>
        </label>
        <label className={style.inputContainer}>
          <span>Cunteúdo:</span>
          <input className={style.input} type="text" maxLength={4000} value={content} onChange={(e)=>setContent(e.target.value)} />
        </label>
        <label className={style.inputContainer}>
          <span>Tags:</span>
          <input type="text" placeholder="ex: tag1, tag2, tag2..." className={style.input} value={tags} onChange={(e)=>setTags(e.target.value)} />
        </label>
          <div>
            <input type="submit" className={style.button} value={'#postar'}/>
          </div>
      </form>
    </div>
  )
}

export default CreatePost