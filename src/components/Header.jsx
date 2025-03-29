import { Link } from 'react-router'

export default function Header(){
    return(
        <header>
            <h1><Link to='/'>Offroad Zlatograd</Link></h1>
            <nav>
                <Link to='/weather'>Weather...</Link>
                <Link to='/save-date'>Save Date...</Link>
                <Link to='catalog-offroads'>Catalog Offroudes...</Link>
                <Link to='/gallery'>Gallery...</Link>
                <Link to='/profile'>Proffile...</Link>
                <Link to='/registration'>Registration...</Link>
                <Link to='/login'>Log In...</Link>
                <Link to='/logout'>Log Out...</Link>
                <Link to='/about'>About...</Link>
                <Link to='/contacts'>Contact us...</Link>
            </nav>
        </header>
    )
}