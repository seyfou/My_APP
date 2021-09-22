import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement,} from 'mdb-react-ui-kit';

function Carousel() {
  return (
    <>

<MDBCarousel showControls >
     <MDBCarouselInner>
       <MDBCarouselItem itemId={0}>
         <MDBCarouselElement style={{height:"620px"}}src='https://static.actu.fr/uploads/2020/11/mariage-illustration-pixabay.jpg' alt='...' />
       </MDBCarouselItem>


       <MDBCarouselItem itemId={1}>
         <MDBCarouselElement style={{height:"620px"}} src='https://www.visitedeco.com/wp-content/uploads/guirlande-de-ballons-rose-gold-a-monter-800x694.jpg' alt='...' />
       </MDBCarouselItem>

       
       <MDBCarouselItem itemId={2}>
         <MDBCarouselElement style={{height:"620px"}} src='https://lh3.googleusercontent.com/proxy/jg2iCWCRgtTvM6b8u5QNK-O7XBInIJRFJsU6IKj2vvRU17KkGrjycJWxrKuvPQz8CIlkjBkrkNU6Mv3RFDmxlayX1xKLNt4ToZmOwKk7SkYXkTx2wpjb42Nl-_dG7hnW6DGg' alt='...' />
       </MDBCarouselItem>
       <MDBCarouselItem itemId={3}>
         <MDBCarouselElement style={{height:"620px"}} src='https://bebe-calin.fr/wp-content/uploads/2021/03/fetes-de-naissance-1.jpg' alt='...' />
       </MDBCarouselItem>

    </MDBCarouselInner>
  </MDBCarousel>



    </>
  )
}

export default Carousel
