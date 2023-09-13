import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='text-lg text-[#111827] flex flex-col items-center md:gap-y-9 gap-y-5 justify-center my-10 mx-2'>
      {/* Social media icons */}
      <div className='text-3xl flex gap-12'>
        <a href="#facebook"><FaFacebookSquare/></a>
        <a href="#instagram"><FaInstagram /></a>
        <a href="#twitter"><FaTwitter /></a>
        <a href="#youtube"><FaYoutube/></a>
      </div>

      {/* Footer links */}
      <div className='flex gap-x-12 gap-y-2 flex-wrap mx-auto justify-center'>
        <a href='#condition-of-use'>Condition of Use</a>
        <a href='#privacy-policy'>Privacy & Policy</a>
        <a href='#press-room'>Press Room</a>
      </div>

      {/* Copyright notice */}
      <p className='text-[#6B7280] text-center'>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  )
}

