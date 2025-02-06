import fs from 'fs';
import path from 'path';

const getPartnerLogos = (): string[] => {
  const directoryPath = path.join(process.cwd(), 'public/svg/partners');
  const files = fs.readdirSync(directoryPath);

  return files.filter((file) => file.endsWith('.svg')).map((file) => `/svg/partners/${file}`);
};

export default getPartnerLogos;
