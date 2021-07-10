import { useRouter } from "next/dist/client/router"

const LINKS = [
    {
        name:  'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]


export default function Navigation(){
    const { pathname } = useRouter()
    return(
        <nav>
            <ul>
                {LINKS.map(({ name, path } ) => (
                    <li key={path}>
                        {path === pathname ? 'here' :name }</li>
                ))}
            </ul>
        </nav>
    )
}