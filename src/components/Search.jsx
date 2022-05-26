import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import objToQueryString from '../utils/convertURI';

import Language from './Language';
import SearchBar from './SearchBar';
import Results from './Results';

function Search() {
  const [selectedSourceLang, setSelectedSourceLang] = useState('en');
  const [selectedTargetLang, setSelectedTargetLang] = useState('el');
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({
    currentPageRequested: 0,
    numberOfPages: 0,
    query: '',
    sourceLanguage: '',
    targetLanguage: '',
  });
  const [loading, setLoading] = useState(false);

  const handleArrowClick = (e) => {
    const temp = selectedSourceLang;
    setSelectedSourceLang(selectedTargetLang);
    setSelectedTargetLang(temp);
    const target = e.currentTarget;
    target.classList.add('enable-anim');
    setTimeout(() => {
      target.classList.remove('enable-anim');
    }, 1000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const searchTerm = e.target.elements.search.value;

    let params = objToQueryString({
      sourceLanguage: selectedSourceLang,
      targetLanguage: selectedTargetLang,
      query: searchTerm,
      currentPageRequested: 1,
    });
    try {
      const response = await fetch(`http://localhost:5000/query?${params}`);
      const data = await response.json();
      if (data?.results && data?.info) {
        setResults(data.results);
        setInfo(data.info);
      } else {
        setResults([]);
        setInfo({
          currentPageRequested: -1,
          numberOfPages: 0,
          query: '',
          sourceLanguage: '',
          targetLanguage: '',
        });
      }
      setLoading(false);
    } catch (error) {}
  };

  return (
    <>
      <form action="/" method="POST" className="search-container" onSubmit={handleFormSubmit}>
        <Language type="source" lang={selectedSourceLang} setLang={setSelectedSourceLang} loading={loading} />

        <div className="arrow-container" onClick={handleArrowClick} style={{ display: loading ? 'none' : 'flex' }}>
          <HiArrowNarrowRight size="3rem" className="arrow" />
        </div>

        <Language type="target" lang={selectedTargetLang} setLang={setSelectedTargetLang} loading={loading} />
        <SearchBar loading={loading} />
      </form>
      <Results results={results} loading={loading} info={info} />
    </>
  );
}
export default Search;
