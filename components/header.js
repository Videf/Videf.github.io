class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `

        <style>
        header {
            position:sticky;
            top: 0;
            font-family: "Montserrat",sans-serif;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px clamp(1em,5vw,30em);
            margins = 0px 0px;
            background-color: #2d0f25;
             box-shadow: 10px 0 16px #1a0b1d;
            z-index: 10;
           
        }
        
        header li, a {
            font-weight: 500;
            font-size: clamp(0.5rem,3vw,1em);
            color: #FFF5E1;
            text-decoration: none;
        }
        
        .logo {
            width: max(16vw,10em); 
            align-self: center;
            cursor: pointer;
            margin-right: auto;
            transition: all 0.2s ease-in-out 0s;
        }
        .logo img{
            width: 100%;
            height: auto;
            margin-top: auto;
            margin-bottom: auto;
        }
        .logo:hover {
            scale: 105%;
        }
        
        .nav_links {
            list-style:none;
            padding-right: 1vw
        }
        .nav_links li{
            display: inline-flex;
            padding: 0px 1vw;
            
        }
        .nav_links li a {
            transition: all 0.2s ease-in-out 0s;
        
        }
        .nav_links li a:hover {
            color: #C80036;
            scale: 105%;
        }
        </style>

        <header>
            <a class="logo" href="index.html">
                <img  src="images/vide_franden_logo.png" alt="logo">
            </a>
            <nav>
                <ul class="nav_links">
                    <li><a href="https://www.linkedin.com/in/vide-fr%C3%A4nd%C3%A9n-ba93a032b/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://red-voxel.itch.io/" target="_blank">Itch.io</a></li>
                    <li><a href="CV/Vide_Franden_cv-2026.pdf" target="_blank">CV</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
  }

  customElements.define('header-component', Header);