
import './App.css'

function Nav(){
    return(
        <div className="Nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand mr-3" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link " href="#">Contact</a>
      </li>
    </ul>
  
  </div>
</nav>
        </div>
    )
}

export default Nav;