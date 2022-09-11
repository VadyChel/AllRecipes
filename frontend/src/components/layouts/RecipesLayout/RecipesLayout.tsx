import { Outlet } from 'react-router-dom'
import Header from '@/components/base/Header/Header'
import Footer from '@/components/base/Footer/Footer'

function RecipesLayout() {
  return (
    <div style={{ overflow: "hidden", minHeight: "100vh" }}>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RecipesLayout