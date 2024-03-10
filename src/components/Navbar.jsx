import logo from '../assets/react.svg'
const Navbar = ()=>{
  return(<>
   <nav>
       <div>
           <div>
               <a href="/" className={'text-2xl font-semibold flex items-center space-x-3 text-purple-900'}>
                   <img src={logo} className={'w-10 inline-block items-center'}/>
               </a>
           </div>
       </div>
   </nav>
  </>);
}
 
 export default Navbar;