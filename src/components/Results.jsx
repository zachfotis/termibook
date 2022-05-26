import Card from './Card';
import Loader from './Loader';

function Results({ results, loading, info }) {
  let rendered;

  if (loading) {
    rendered = <Loader />;
  } else {
    if (results && results.length > 0) {
      rendered = results.map((result) => <Card key={result.ID} result={result} />);
    } else if (info.currentPageRequested === -1) {
      rendered = (
        <div className="error-container">
          <img src={require(`../assets/icons/noResults.png`)} alt="no-results" />
          <h1>No results found</h1>
        </div>
      );
    } else {
      rendered = (
        <h1 className="init-message">
          This technical dictionary developed by engineers, <br /> to help people in different fields, to search for
          technical terms and phrases. <br />
          <br /> Please feel free to search for anything you want.
        </h1>
      );
    }
  }

  return <div className="results-container">{rendered}</div>;
}
export default Results;
