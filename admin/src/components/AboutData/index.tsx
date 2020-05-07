import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AboutTab from './aboutTab';
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
      <Grid container spacing={3}>
        {aboutData.map((v) => (
          <Grid item sm={6} key={v._id}>
            <AboutTab data={v} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AboutData;
