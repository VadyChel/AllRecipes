import './Header.css'
import Button from '@/components/ui/Button/Button'
import Spacer from '@/components/ui/extras/Spacer/Spacer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Categories from '@/components/base/Header/components/Categories/Categories'


function Header() {
  const [openCategories, setOpenCategories] = useState(false)
  return (
    <div>
      <div className="header-container">
        { openCategories ? (
          <Categories/>
        ) : null }

        <div className="header-half1">
          <Link to="/" style={{display: "flex", textDecoration: "none"}}>
            <Button value="На головну" plain/>
          </Link>
          <div style={{display: "flex"}} onClick={() => setOpenCategories((value) => !value)}>
            <Button value="Категорії" plain/>
          </div>
        </div>
        <div className="header-half2">
          <Spacer />
          <Button value="Ввійти" plain/>
        </div>

        <div className="header-rect1"></div>
        <div className="header-rect2"></div>
        <div className="header-rect3"></div>

        <div className="header-rect4"></div>
        <div className="header-rect5"></div>
        <div className="header-rect6"></div>
      </div>
    </div>
  )
}

export default Header