import { socialProfiles } from '@/helpers/mockData/footerIcons';
import SimpleLink from '@/src/components/elements/SimpleLink';

const SocialProfiles = () => {
  return (
    <div>
      <h6>Social Profiles</h6>
      <div className='flex space-x-3.5'>
        {socialProfiles.map((profile) => {
          return (
            <SimpleLink key={profile.key} href={profile.link} classNames='rounded-lg bg-white-97 p-3.5'>
              <profile.icon className='h-6 w-6 transition hover:scale-125' />
            </SimpleLink>
          );
        })}
      </div>
    </div>
  );
};

export default SocialProfiles;
