import React, { Component } from 'react';
import '../CSS/App3.css';
import $ from 'jquery'

class Login extends Component {
  componentDidMount(){
    $(document).ready(function()
{
//toggles active class between tabs by clicking on header links
    $('.header-item').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('activated');
        $(this).siblings().removeClass('activated');


//changes login to register view and vice versa
        let target_href = $(this).attr('href');
        if(target_href === '#register' && $(target_href).css('display') === 'none')  {
            $('.dish').addClass("activated");
            setTimeout(function () {
                $('.dish').css("background-image", " url('https://i.pinimg.com/originals/e5/5e/b7/e55eb780a1cc68a5679ffa8843034247.png'");
            }, 300);

        }
        else if(target_href === '#login' && $(target_href).css('display') === 'none')
        {
            $('.dish').addClass("activated");
            setTimeout(function() {
                $('.dish').css("background-image", " url('http://ufc206i.com/images/thor-silhouette.png'");
            }, 300);
        }

        else {

        }

        $('.form-holder > .form').not(target_href).hide();
        $(target_href).fadeIn(850);

        setTimeout(function () {
            $('.dish').removeClass('activated');
        }, 600);

    });
});
  }
  render(){
    return(
      <div>
      <main>
       <div class="login-holder">
           <div class="container">
               <div class="login">
                   <div class="form-holder">
                       <div class="dish"></div>
                       <div class="header">
                           <a class="header-item activated" href="#login" id="login-caller">Login</a>
                           <a class="header-item" href="#register" id="register-caller">Sign up</a>
                       </div>
                       <div class="form activated" id="login" >
                           <div class="input-row">
                               <input class="input" type="text" required />
                               <label class="label">Username</label>
                               <span class="highlite"></span>
                               <span class="bar"></span>
                           </div>
                           <div class="input-row">
                               <input class="input" type="password" required />
                               <label class="label">Password</label>
                               <span class="highlite"></span>
                               <span class="bar"></span>
                           </div>
                           <div>
                               <input class="check-input" type="checkbox" id="login-checkbox" />
                               <label for="login-checkbox">Remember me</label>
                           </div>
                       </div>
                       <div class="form" id="register" >
                               <div class="input-row">
                                   <input class="input" type="text" required />
                                   <label class="label">Username</label>
                                   <span class="highlite"></span>
                                   <span class="bar"></span>
                               </div>
                               <div class="input-row">
                                   <input class="input" type="password" required />
                                   <label class="label">Password</label>
                                   <span class="highlite"></span>
                                   <span class="bar"></span>
                               </div>
                               <div class="input-row">
                                   <input class="input" type="password" required />
                                   <label class="label">Password confirmation </label>
                                   <span class="highlite"></span>
                                   <span class="bar"></span>
                               </div>
                               <div>
                                   <input class="check-input" type="checkbox" id="register-checkbox" />
                                   <label for="register-checkbox">I agree to Login’s Terms of Service</label>
                               </div>
                           </div>
                   </div>
                   <div class="sub-button">
                       <input onClick={this.props.clickHandler} class="button" type="submit" value="Submit" />
                   </div>
               </div>
           </div>
       </div>
</main>
      </div>
    )
  }
}

export default Login
