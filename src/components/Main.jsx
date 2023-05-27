import './Main.css'

function Saludar() {
    function SaludoA(){
        return {
            saludo: "CODERS",
            comision: 3421,
        };
        
    }
    const saludo = SaludoA();
    return(
        <>
        <div className='position-absolute top-50 start-50 translate-middle'>
        <h3>Bienvenidos {saludo.saludo}</h3>
        <h4>Son la comision n°{saludo.comision}</h4>
        </div>
        </>
    )
}
export default Saludar
