import infoStyles from './Info.module.css'

const Info = () => (
  <div className={infoStyles.wrapper}>
    <p>This is a project by <a href="https://sarahransohoff.com" target="_blank">Sarah Ransohoff</a>. You can view the source code <a href="https://github.com/sranso/prettygoodtherapy" target="_blank">here</a>.</p>
    <p>This is not real therapy. If you need therapy, please seek it – it has been very helpful for me. So has humor. This is a combination of the two.</p>
    <iframe src="https://giphy.com/embed/3ohhwGwvnyjI6l9bFu" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
)

export default Info


