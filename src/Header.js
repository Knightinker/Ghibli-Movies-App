import React from 'react'

function Header() {
  return (
   
  
    <div>
     <table className='titleBar'>     
         <tbody>
             <tr>
                 <td>
                     <img alt="app icon" width="50"src="https://cdn-icons-png.flaticon.com/512/3163/3163487.png"/>
                 </td>
                 <td  width="8"/>
                 <td>
                   <h1> Ghibli Movies </h1> 
                 </td>
             </tr>
         </tbody>
     </table>

     <input className='searchBar' placeholder='Enter movie title'/>
 </div>
  )
}

export default Header