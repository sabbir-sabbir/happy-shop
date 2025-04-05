import React from 'react'
import Link from 'next/link'
import DropDown from './dropDown'

const Footer = () => {

    const social = [
        {
            icon: '/fb.svg',
            alt: 'Facebook',
            link: 'https://www.facebook.com/xyzsabbir1234'
        },
        {
            icon: '/insta.svg',
            alt: 'Instagram',
            link: 'https://www.instagram.com/iosabbir7890/'
        },
        {
            icon: '/git.svg',
            alt: 'Github',
            link: 'https://github.com/sabbir-sabbir'
        },
        {
            icon: '/whats.svg',
            alt: 'WhatsApp',
            link: '01329393695'
        },
        {
            icon: '/linkedin.svg',
            alt: 'LinkedIn',
            link: 'www.linkedin.com/in/sabbir-rahman-5aa368351'
        }
    ]

    const pay = [
        {   
            id: 1,
            icon: '/paypal.svg',
            alt: 'Paypal',
        },
        {   
            id: 2,
            icon: '/payoneer.svg',
            alt: 'payonee',
        },
        {   
            id: 3,
            icon: 'ptm.svg',
            alt: 'paytm',
        },
        {   
            id: 4,
            icon: '/ae.svg',
            alt: 'ae',
        },
        {   
            id: 5,
            icon: '/mc.svg',
            alt: 'mc',
        },
        {   
            id: 6,
            icon: '/visa.svg',
            alt: 'visa',
        },


        
    ]
  return (
    <>
    <footer className='w-full h-auto py-8 px-12  mt-24 bg-zinc-700'>
        <div className='w-full h-auto flex justify-between items-center '>
            <img className='w-10 h-10 object-cover' src="/logo.svg" alt="Logo" />
            <img className='w-10 h-10 object-cover' src="/footerlogo.svg" alt="footerlogo" />
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-8 mt-8 '>
            {/* col 1 */}
            <div className='flex flex-col items-center justify-center gap-6'>
                 <h1 className='font-poppins font-medium tracking-wider text-[14px] text-lime-50'>Social Media Links</h1>
                 <div className='flex flex-col items-start justify-start gap-5'>
                    {social.map((item, index)=> (
                        <div key={index} className='flex items-center justify-center gap-4'>
                            <img className='w-6 h-6 bg-white rounded-full p-1 object-cover' src={item.icon} alt={item.alt} />
                           <a className='text-[12px] text-lime-50  font-poppins tracking-wider' href={item.link}>{item.alt}</a>
                        </div>
                      
                    ))}
                 </div>
            </div>
            {/* col 2 */}

            <div className='flex flex-col items-center justify-start gap-6'>
            <h1 className='font-poppins font-medium tracking-wider text-[14px] text-lime-50'>Customer Servises</h1>
            <div className='flex flex-col items-start justify-start gap-2'>
                   <a className='text-[12px] text-lime-50  font-poppins tracking-wider' href='#'>FAQ</a>
                   <a className='text-[12px] text-lime-50  font-poppins tracking-wider' href='#'>Terms & Conditions</a>
                   <a className='text-[12px] text-lime-50  font-poppins tracking-wider' href='#'>Privacy Policy</a>
                  <Link className='text-[12px] text-lime-50  font-poppins tracking-wider' href="/components/contact"><button>Contact us</button></Link>
            </div>
            </div>

            {/* col 3 */}
            <div className='flex flex-col items-center justify-start gap-6'>
            <h1 className='font-poppins font-medium tracking-wider text-[14px] text-lime-50'>Payments Method</h1>
            <div className='grid grid-cols-3 gap-3 items-center justify-start'>
                {pay.map((pm, i)=> (
                    <div key={pm.id}>
                        <img className='w-12 h-12' src={pm.icon} alt={pm.alt} />
                    </div>
                ))}
            </div>
            </div>

            {/* col 4 */}
            <div className='flex flex-col items-center justify-start gap-6'>
            <h1 className='font-poppins font-medium tracking-wider text-[14px] text-lime-50'>Location </h1>
            <div>
                <DropDown/>
            </div>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer