import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-950 text-white flex flex-col justify-center items-center py-6 px-4 md:px-10 gap-6 text-center'>
      <div className='flex flex-col items-center gap-2'>
        <div className='text-sm md:text-base'>Copyright &copy; {currentYear} Buy me Snack | All rights reserved!
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-3 md:gap-5'>
        <Link href='/about' className='text-sm md:text-base hover:underline transition-colors'>About Us</Link>
        <Link href='/contact' className='text-sm md:text-base hover:underline transition-colors'>Contact Us</Link>
        <Link href='/privacy-policy' className='text-sm md:text-base hover:underline transition-colors'>Privacy Policy</Link>
        <Link href='/terms&conditions' className='text-sm md:text-base hover:underline transition-colors'>Terms & Conditions</Link>
        <Link href='/cancellation&refund' className='text-sm md:text-base hover:underline transition-colors'>Cancellation/Refund Policies</Link>
      </div>
    </footer>
  );
}

export default Footer;
