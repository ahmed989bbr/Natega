import './header.css'
import logo from './1.jpeg'
export default function Header() {

    return(
        <>

    <div className="header">
<div className='container'>
 <div className='header-content'>
         <div className="logo">
           <img src={logo} alt="شعار المعهد" />
         </div>
         <h1>صفحة عرض نتائج الطلاب</h1>
         <div className="institute-name">المعهد العالي للعلوم التجارية بالمحلة الكبرى</div>
       </div>
       
 </div>
</div>
        </>
    )
}