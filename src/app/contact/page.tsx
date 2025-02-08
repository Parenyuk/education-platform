import { userAuthStateAction } from '@/actions/auth/userAuthStateAction';
import ContactBoxUnit from '@/src/components/units/ContactBoxUnit';
import TopPageUnit from '@/src/components/units/TopPageUnit';
import { contactPageText } from '@/utils/mockData/contactPage';
import ContactFormUnit from 'src/components/units/ContactFormUnit';

export default async function ContactPage() {
  const { user } = await userAuthStateAction();

  return (
    <>
      <TopPageUnit title='Contact Us' description={contactPageText} />
      <div className='container mx-auto'>
        <div className='my-12 flex flex-col rounded-xl bg-white md:mb-20 md:mt-20 md:flex-row 2xl:mb-40 2xl:mt-24'>
          <ContactFormUnit user={user} />
          <ContactBoxUnit />
        </div>
      </div>
    </>
  );
}
