import React, { useEffect, useState } from 'react';
import { About } from '../../store/interfaces';

export interface AboutDataProps {
  about: About[];
}

const AboutData: React.FC<AboutDataProps> = ({ about }) => {
  const [aboutData, setAboutData] = useState<About[]>([]);

  useEffect(() => {
    setAboutData(about);
  }, [about]);
  return (
    <div>
      About data containers <pre>{JSON.stringify(aboutData, null, 2)}</pre>
    </div>
  );
};

export default AboutData;
