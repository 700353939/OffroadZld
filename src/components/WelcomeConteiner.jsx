import jeep from '/jeep.svg'

export default function WelcomeConteiner(){
    return (
    <div className='welcome-conteiner'>
        <h1>Offroad Zlatograd</h1>
        <img src={jeep} className="jeep" alt="Jeep" />
    </div>
    )
}