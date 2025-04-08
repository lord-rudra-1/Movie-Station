import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
        <Link href="/" className="m4 text-blue-500" >
            Home
        </Link>
        <Link href="/movies" className="m4 text-blue-500">
            Movies
        </Link>
        <Link href="/tv-shows" className="m4 text-blue-500">
            TV Shows
        </Link>
    </nav>
  )
}
