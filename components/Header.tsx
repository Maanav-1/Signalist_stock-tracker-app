import Link from "next/link"
import Image from "next/image"
import NavItems from "./Navitems"
import UserDropdown from "./UserDropdown"


const header = ({user}: {user:User}) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
        </Link>
        <nav className="hidden sm:block">
          <NavItems/>
        </nav>
        <UserDropdown user={user}/>
      </div>
    </header>
  )
}

export default header