`use strict`

import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faPhone, faHome, faEnvelope
// } from '@fortawesome/pro-thin-svg-icons'
// import {
//     faFacebookF,
//     faLinkedinIn, faQuora, faTwitter,
// } from '@fortawesome/free-brands-svg-icons'
import HubspotForm from 'react-hubspot-form'
import mail from '../components/Illustrations/Mail/youvegotmail.svg'
import Layout from '../components/layout'
import Title from '../components/Titles/h1'
import { HouseIcon } from '@heroicons/react/outline'
import { PhoneIcon } from '@heroicons/react/outline'
import { EnvelopeIcon } from '@heroicons/react/outline'

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Contact() {
    return (
        <Layout>
      <div className="relative bg-fixed bg-wallpaper">
     <div className="w-full pt-20 pl-16"> <Title
                    className="z-50 pt-20 pl-20 ml-20 wow slideInRight"
                    data-wow-delay="1s"
                    bgtext="Get In Touch"
                    titletext="Contact"
                /></div>
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="object-cover w-full h-full lg:absolute slideInRight"
                    data-wow-delay="1s"

              src={mail}
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 py-16 mx-16 sm:py-24 sm:px-6 lg:px-8 lg:mx-32 lg:max-w-full lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="pl-16 mx-auto max-w-7xl sm:max-w-full lg:mx-0 ">
              <p className="mt-4 text-xl oswald text-gray-50 sm:mt-3">
                We’d love to hear from you! Send us a message using the form, or email us.
              </p>
              <h3>Send a Message</h3>

              <HubspotForm
                            portalId="43657022"
                            formId="0b80c17e-3251-4a9e-a4b3-c5ea4cca157c"
                            onSubmit={() => console.log(`Submit!`)}
                            onReady={form => console.log(`Form ready!`)}
                            loading={<div>Loading...</div>}
                        />


            <dl className="inline-block mt-8 text-xl text-gray-50 raleway">
          


              <div>
      
           


                <dt className="sr-only">Postal address</dt>
                <dd className="flex">
                {/* <HouseIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" /> */}
            <span className="pl-10">11720 Coppergate Dr Unit 101
                  <br />Raleigh, NC 27614</span>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                {/* <PhoneIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" /> */}
                <span className="pl-10"><a href="tel:9194442005"><span className="text-white hover:text-white">+1 (919) 444-2005</span></a></span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                {/* <EnvelopeIcon className="flex-shrink-0 inline-block w-10 h-10 text-gray-50" /> */}
                  <span className="ml-3">hello@twoghoststrategy.com</span>
                </dd>
              </div>
           {/*   <div className="mt-3"><dt className="sr-only">Social</dt>
              <div className="social-share"
                        data-wow-delay="200ms"
                        data-wow-duration="1000ms">
                      <a href="https://www.facebook.com/twoghosts">facebook
                        {/* <FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50 fa-pull-left" icon={faFacebookF} /> */}
                       {/*   </a>
                        <a href="https://linkedin.com/company/twoghosts">linkedin
                          {/* <FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faLinkedinIn} /> */}
                       {/*     </a>
                  <a href="#link">
                    {/* <FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faQuora} /> */}
                    {/*  </a>
                     <a href="https://www.twitter.com/oakwave">twitter
                      {/* <FontAwesomeIcon className="inline-block w-10 h-10 mx-10 text-gray-50" icon={faTwitter} /> */}
                       {/* </a> 
     </div>
     
     </div>*/}
            </dl>


           

            </div>
          </div>
        </div>
      </div>
      </Layout>
    )
  }



