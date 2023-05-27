import "./nav.css";

function Nav(props){
    return(
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={props.img} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                <h3>Bootstrap</h3>
                </a>
        </div>
        </nav>

    );
}
export default Nav