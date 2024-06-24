import Header from "../componants/Header.jsx"

import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
