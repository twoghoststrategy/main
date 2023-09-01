'use strict';
import HubspotForm from 'react-hubspot-form'
import React from 'react';

const Contact = () => {

    return (
        <>
<HubspotForm
   portalId='43657022'
   formId='0b80c17e-3251-4a9e-a4b3-c5ea4cca157c'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />
</>
    )
}
export default Contact;