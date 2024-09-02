import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import useStyles from './stylesheet';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';


const Login = () => {

const {theme}= useTheme();
const classes = useStyles({theme});
const {language} = useLanguage();

return <div>
  <div className={classes.container}>
    <div className={classes.loginCard}>
      {language.translations.username}
      <input className={classes.input} type='text' placeholder={language.translations.username}/>
      {language.translations.emailadress}
      <input className={classes.input} type='text' placeholder={language.translations.emailadress} />
      {language.translations.password}
      <input className={classes.input} type='password' placeholder={language.translations.password} />
      <Link to={"/"} style={{ textDecoration: "none" }}>
      <Button title={language.translations.login} variant="header"/> 
      </Link>
    </div>
  </div>
</div>
};

export default Login;