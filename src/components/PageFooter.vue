<template>
    <div>

    <div id="pagefooter">

    <div class="social">

        <div id="footer">

          <div class="star">
            <div>
                <img src="@/assets/star.png" alt=" image" id="star3"/> 
            </div>
            <div>
                <h2>Trustpilot</h2>
            </div>
          </div>

          <div class="star1">

         <div id="contact">

                <div>
                <img src="@/assets/star (1).png" alt=" image" id="star2"/> 
                </div>

                <div>
                    <img src="@/assets/star (1).png" alt=" image" id="star2"/> 
                </div>

                <div>
                    <img src="@/assets/star (1).png" alt=" image" id="star2"/> 
                </div>

                <div>
                    <img src="@/assets/star (1).png" alt=" image" id="star2"/> 
                </div>

            <div>
                <img src="@/assets/star (1).png" alt=" image" id="star2"/> 
            </div>

         </div>

            <div>
                <h4>TrustScore 4.9 | 26,859 reviews</h4>

            </div>

           </div>


        </div>

      
       
       <div class="about">

            <div>
                <h2>About</h2>
            </div>

             <div>
                <h2>Contact</h2>
            </div>

             <div>
                <h2>GiftCards</h2>
            </div>

             <div>
                <h2>Terms of Use</h2>
            </div>

             <div>
                <h2>privacy Notice</h2>
            </div>

             <div>
                <h2>Support/Help</h2>
            </div>
            
        </div>



        <div class="follow">

            <div>
                <h2>Follow us</h2>
            </div>
           
        <div id="media">

            <div>
                <img src="@/assets/twitter (2).png" alt=" image" />
            </div>

            <div>
                <img src="@/assets/facebook.png" alt=" image" />
            </div>

            <div>
                <img src="@/assets/social (1).png" alt=" image" />
            </div>

            <div>
                <img src="@/assets/twitter (1).png" alt=" image" />
            </div>

            <div>
                <img src="@/assets/tik-tok (1).png" alt=" image" />
            </div>
        </div>

        </div>

    </div>

    <div class="terms">

        <div id="copy">
            <P>&copy;2024 All Right Reserved</P>
        </div>

        <div id="display">
            <P>Terms of Use</P>
        </div>

        <div id="display">
            <P>Privacy Notice</P>
        </div>

        <div id="display">
            <P>Accessibility Notice </P>
        </div>

    

    </div>


    </div>
        

    </div>
</template>

<script>
    export default {
        name: 'PageFooter',
        components: {

        }
    }
</script>

<style scoped>

#pagefooter{
    box-sizing: border-box;
    min-height: 10vh;
    justify-content: center;
    align-content: center;
    background-color: #2b0f42;
    color: white;
    padding-top: 40px;
    width: 100%;
}

#star3{
    width: 35px;
    height: 35px;
    padding-top: 9px;
    
}


#star2{
    width: 40px;
    height: 40px;
}

.follow img{
    width: 25px;
    height: 25px;
}

.star{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
   
}

.star h2{
  box-sizing: border-box;
  padding-left: 5px;

}

.star1 h4{
    padding-left: 20px;
    padding-top: 9px;
    color: white;
    
}


#contact{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 50px;
    right: 60px;
    

}

#footer{
    position: relative;
    box-sizing: border-box;
}

#display{
    display: none;
}

.about{
    box-sizing: border-box;
    font-size: 10px;
    font-family: sans-serif;
    

}

.follow h2{
    font-family: sans-serif;
    font-size: 19px;
    padding-top: 9px;
}


#media{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 15px;
    padding-bottom: 15px;
}


#copy{
    font-family: sans-serif;
}



@media only screen and (min-width: 768px){


#contact{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 50px;
    right: 35%;
}


}


@media only screen and (min-width: 968px){


    .social{
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 80px;
    }


  #contact{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 50px;
    right: 6%;
}


.terms{
 display: flex;
 justify-content: center;
 align-content: center;
 padding: 10px;
 gap: 35px;

}




#display{
    display: block;
 
}


}


@media only screen and (min-width: 1280px){


.social{
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 300px;
    }


.terms{
    gap: 80px;
}

}





</style>