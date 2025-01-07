import { userAuthStateAction } from '@/actions/auth/userAuthStateAction';
import { contactPageText } from '@/helpers/mockData/contactPage';
import ContactBoxUnit from '@/src/components/units/ContactBoxUnit';
import ContactFormUnit from 'src/components/units/ContactFormUnit';

export default async function ContactPage() {
  const { user } = await userAuthStateAction();

  console.log('user1', user);

  return (
    <>
      <div className='container mx-auto mt-12 grid md:mt-20 md:grid-cols-2 md:gap-20 2xl:mt-28 2xl:gap-24'>
        <h2 className='text-3xl font-semibold md:self-center md:text-5xl 2xl:text-6xl'>Contact Us</h2>
        <p>{contactPageText}</p>
      </div>
      <span
        className='mx-4 mt-7 flex h-0.5 max-w-full items-center justify-center space-x-3 bg-white-90 md:mx-5 md:mt-10 md:space-x-6 2xl:mx-8
          2xl:mt-12'
      />
      <div className='container mx-auto'>
        <div className='my-12 flex flex-col rounded-xl bg-white-100 md:mb-20 md:mt-20 md:flex-row 2xl:mb-40 2xl:mt-24'>
          <ContactFormUnit user={user} />
          <ContactBoxUnit />
        </div>
      </div>
    </>
  );
}
