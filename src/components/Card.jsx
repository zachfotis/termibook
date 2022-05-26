function Card({ result }) {
  // Normalize the field names in terms of lower and upper case
  const normalizeField = (fieldName) => {
    let field = fieldName[0].toUpperCase() + fieldName.slice(1).toLowerCase();
    field = field.split(';');
    field = field.map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    field = field.join(' | ');
    return field;
  };

  return (
    <div className="card">
      <div className="query-container">
        <img src={require(`../assets/flags/${result.SOURCE_LANG}.svg`)} alt="source-lang" />
        <h1 className="card-query">{result.WORD}</h1>
      </div>
      {result.TRANSLATION.map((translation, index) => {
        return (
          <div key={1 + index + result.ID} className="trans-container">
            <img src={require(`../assets/flags/${result.TARGET_LANG}.svg`)} alt="target-lang" />
            <h1 className="card-result">{translation}</h1>
          </div>
        );
      })}
      <h1 className="secondary">
        Field: <span className="card-field">{normalizeField(result.FIELD)}</span>
      </h1>
      <h1 className="secondary">
        Quality: <span className="card-quality green-text">{result.QUALITY}</span>
      </h1>
    </div>
  );
}
export default Card;
