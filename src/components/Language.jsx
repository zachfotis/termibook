import PropTypes from 'prop-types';
import { langArray } from '../assets/files/languages.js';

function Language({ type, lang, setLang, loading }) {
  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className={`${type}-language-container`}>
      <div className="inner-container">
        <img id={`${type}-image`} src={require(`../assets/flags/${lang}.svg`)} alt="" />
        <select
          id={`${type}-language`}
          name={type}
          value={lang}
          onChange={handleChange}
          disabled={loading ? true : false}
        >
          {langArray.map((lang) => {
            return (
              <option key={lang.value} value={lang.value}>
                {lang.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

Language.defaultProps = {
  lang: 'en',
};

Language.propTypes = {
  type: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default Language;
