import React from 'react'
import './App.css'
import { ArticleList } from './components/ArticleList/ArticleList'
import { Layout } from './components/Layout/Layout'

const App = () => {
  return (
    <Layout>
      <ArticleList/>
    </Layout>
  )
}

export default App
