import React from 'react'

const page = () => {
  return (
    <div className='mx-auto my-8 flex w-[calc(100%-2rem)] max-w-4xl flex-col gap-6 rounded-lg bg-purple-100 p-5 sm:my-12 sm:w-[calc(100%-3rem)] sm:p-8'>
      <h2 className='flex justify-center font-bold text-2xl'>Contact Us</h2>

      <p>We’d love to hear from you!</p>
      <p>
        Whether you have a question, feedback, or just want to say hello — the
        BitLinks team is always here to help.
      </p>

      <h3 className='font-bold text-xl'>Get in Touch</h3>

      <p className="break-words">📧 Email: <a href="mailto:support@bitlinks.com">support@bitlinks.com</a></p>

      <p>💬 Live Chat: Available Monday to Friday, 9 AM – 6 PM (IST)</p>
      <p>📍 Address: BitLinks HQ, Bengaluru, India</p>

      <h3 className='font-bold text-xl'>For Business Inquiries</h3>

      <p className="break-words">
        Interested in partnering with us or integrating BitLinks into your
        product? Reach out to our business team at business@bitlinks.com
      </p>
      <h3 className='font-bold text-xl'>Follow Us</h3>

      <p>Stay connected and get the latest updates:</p>
      <p className="break-words">🐦 Twitter: <a href="https://twitter.com/bitlinks">@bitlinks</a></p>

      <p className="break-words">📘 Facebook: <a href="https://facebook.com/bitlinks">facebook.com/bitlinks</a></p>

      <p className="break-words">📸 Instagram: <a href="https://instagram.com/bitlinks_official">@bitlinks_official</a></p>

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
