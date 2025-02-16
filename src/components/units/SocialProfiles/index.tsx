import { Link } from '@heroui/link';

import { socialProfiles } from '@/lib/constants/socialProfiles';

const SocialProfiles = () => {
  return (
    <div>
      <h6 className='mb-3.5 mt-10 text-lg font-semibold md:mt-0 2xl:text-xl'>Social Profiles</h6>
      <div className='flex space-x-3.5'>
        {socialProfiles.map((profile) => {
          return (
            <Link key={profile.key} href={profile.link} className='rounded-lg bg-white-97 p-3.5'>
              <profile.icon className='h-6 w-6 transition hover:scale-125' />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialProfiles;
