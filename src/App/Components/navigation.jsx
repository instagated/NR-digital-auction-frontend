import { useHistory } from "react-router-dom";

export const Navigation = (props) => {

const history = useHistory()
  function onPress(id) {

        history.push(`/service-signup`,{type:'saasSignUp'});
      }
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        <div class="w-2/12 sm:w-2/12 px-4">

          <a href="/">
            <img
              className="logo-img"
              src="img/logo.png"
              alt=""
              />
          </a>
          </div>

        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>

            <li>
              <a onClick={()=>onPress()} className='page-scroll'>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
