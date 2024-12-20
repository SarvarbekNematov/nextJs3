"use client"
import Link from 'next/link'
import React from 'react'
import {usePathname, useRouter, useParams} from "next/navigation"

// useParams = useParams
// useRouter = useNavigate
// usePathname = useLocation

const LINKS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  },
  {
    name: "Login",
    path: "/login"
  },
  {
    name: "Help",
    path: "/help"
  },
]

const Header = () => {
  const pathname = usePathname()

  const activeClass = (path)=>{
    return pathname === path ? " font-bold " : ""
  }
  
  return (
    <div className='p-4 bg-slate-400 flex gap-5 justify-center'>
        {
          LINKS?.map(({name, path}, inx) => (
            <Link className={activeClass(path)} key={inx} href={path}>{name}</Link>
          ))
        }
    </div>
  )
}

export default Header