import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ArticleList from './components/ArticleList'
import viteLogo from './assets/wikipedia-logotype-of-earth-puzzle-svgrepo-com.svg'
import './App.css'
import { search } from './api';

function App() {
  const [articles, setArticles] = useState([])

  const handleSearch = async (searchTerm) => {
    const results = await search(searchTerm);
    setArticles(results)
  }
  return (
    <>
     <header>
      <div>
        <div className="img"><img src={viteLogo} alt="wikipedia" /></div>
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch}/>
      </div>
     </header>
     <main id="searchResult">
        <ArticleList articles={articles} />
      </main>
    </>
  )
}

export default App
