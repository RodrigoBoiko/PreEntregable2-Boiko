import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
        
    <div className="container flex items-center justify-center p-2 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <img className="h-12 w-12 mr-2" src={logo} alt="logo"/>
        <a href="#" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Ropa masculina</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Ropa Femenina</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Calzado</a>

    </div>
</nav>
  )
}

export default Navbar