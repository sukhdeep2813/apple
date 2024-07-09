import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-slate-50">
          <nav>  
              <img src={appleImg} alt="Apple" width={14} height={18}/>

              <div>
                  {["Phones", "Macbooks", "Tablets"].map((nav)=>(
                    <div key={nav}>
                        
                        {nav}

                    </div>
                    
                  ))}
              </div>
              <div>
                  <img src={searchImg} alt="Search"/>
                  <img src={bagImg} alt="Cart"/>
              </div>
          </nav>
     </header>
  )
}

export default Navbar;