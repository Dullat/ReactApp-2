import logo from "../assets/logos/ghostoftsushima.jpg"

const Header = () => {
  return (
    <header className="flex h-16 bg-neutral-900 text-slate-100 items-center px-2 gap-4">
      <div className="flex ">
        <div
          style={{
            backgroundImage: `url(${logo})`,
            height: "50px",
          }}
          className="aspect-square bg-cover bg-center"
        ></div>
      </div>
      <p className="border-r border-r-slate-100 pr-4 font-bold text-xl">Epic</p>
      <nav className="flex font-semibold">
        <ul className="gap-4 | flex">
          <li className="support">
            <a href="#">Support</a>
          </li>
          <li className="distribute">
            <a href="#">Distribute</a>
          </li>
        </ul>
      </nav>
      <button className="ml-auto mr-0 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
        Download
      </button>
    </header>
  )
}

export default Header
