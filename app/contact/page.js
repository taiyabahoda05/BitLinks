import React from 'react'

const page = () => {
  return (
    <div className='bg-purple-100 mx-auto max-w-4xl p-8 my-16 flex flex-col gap-6 rounded-lg'>
      <h2 className='flex justify-center font-bold text-2xl'>Contact Us</h2>

      <p>We’d love to hear from you!</p>
      <p>
        Whether you have a question, feedback, or just want to say hello — the
        BitLinks team is always here to help.
      </p>

      <h3 className='font-bold text-xl'>Get in Touch</h3>

      <p>📧 Email:<a href="mailto:support@bitlinks.com">support@bitlinks.com</a></p>

      <p>💬 Live Chat: Available Monday to Friday, 9 AM – 6 PM (IST)</p>
      <p>📍 Address: BitLinks HQ, Bengaluru, India</p>

      <h3 className='font-bold text-xl'>For Business Inquiries</h3>

      <p>
        Interested in partnering with us or integrating BitLinks into your
        product? Reach out to our business team at business@bitlinks.com
      </p>
      <h3 className='font-bold text-xl'>Follow Us</h3>

      <p>Stay connected and get the latest updates:</p>
      <p>🐦 Twitter: <a href="https://twitter.com/bitlinks">@bitlinks</a></p>

      <p>📘 Facebook: <a href="https://facebook.com/bitlinks">facebook.com/bitlinks</a></p>

      <p>📸 Instagram: <a href="https://instagram.com/bitlinks_official">@bitlinks_official</a></p>

      <h3 className='font-bold text-xl'>We’re Here to Help</h3>

      <p>
        Got a problem with a link or need technical assistance? Check out our
        Help Center
      </p>
      <p>
        or send us a message — we’ll get back to you as soon as possible.
      </p>
    </div>
  )
}

export default page

