import Carousel from 'react-bootstrap/Carousel';


import React from 'react'

const Carouselpage = () => {
  return (
    <div className='h-svh'>

<Carousel>
      <Carousel.Item>
        <img className='  w-full d-block h-screen object-cover' src='https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/457284219_1334359870913696_2424083007570546445_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHf_ip33t7lQ29eOcFmdplk5erwZoN6oRzl6vBmg3qhHHTpLE0PQEK5j2cF50-Y6ymrpMsfBk4ThGCJckZOSWv2&_nc_ohc=Ze91qozu4x4Q7kNvgEnD5Vb&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&_nc_gid=ASITaU0tpTEZblCDFskJhNU&oh=00_AYBhWSb9x7HRCCF4_TwAVNYXqbe2lHwoHug-okpD37wAvA&oe=67027B5A' alt=''/>
        
        <Carousel.Caption>
          <h3 className='black'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='w-full d-block h-screen object-cover' src='https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/398964262_1128277398188612_3734745626859545490_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZQ7TV0MLBJ9_O5KBriEhmxApOjxooWkfECk6PGihaR5x-64JkjTxkqcRHKcADWiCQt2ABl_L0I58wmfFUKw3O&_nc_ohc=5O_h_h4--hQQ7kNvgEo9FHG&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&_nc_gid=AOm8ewJZ7RRODZN8NLLm-zb&oh=00_AYB7On-AMLyajP4sU1g33WXdHEFDQbUNmyaBTx16tuDJpA&oe=66FEDD01' alt=''/>
        
        <Carousel.Caption>
          <h3 className='black'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img    className=' w-full d-block h-screen object-cover' src='https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/460725965_1351172709232412_6072583258341312108_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGkkXBzff129im_bHf8mVcrAUov3DHmB0oBSi_cMeYHSicyG5SxzvP0p68a893pLXJ6YClKmUiUuemodUsGpeOo&_nc_ohc=RDDCaxusGY8Q7kNvgGuVMp6&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&_nc_gid=A8dEi_SgYIIvHQ5WBReIS4D&oh=00_AYDVvIxDJewXgqaGQLVbSxFiyhybv5v530MiMU2LfRa5pQ&oe=66FEB77F' alt=''/>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img   className='w-full d-block h-screen object-cover' src='https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/451220580_1302603224089361_2800255692752019793_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFhVk1NgijaOrynoHkv5Yp8lO6qUjzeVnyU7qpSPN5WfDVBAGnDBv2GTLNzlzhi19xa1RtcR9M8OpnE1EgbHnwe&_nc_ohc=Lv2vrn5etHEQ7kNvgGeEX2l&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&oh=00_AYBmY43XzltdI9VlMr6O-iJtcXltugzN9BStogekkTV0kw&oe=66FECCEA' alt=''/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carouselpage
