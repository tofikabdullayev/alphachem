import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { AboutPageState } from './../store/reducers/about';
import { getAbout } from '../store/actions/about';
// import { About } from '../store/interfaces';
import useStyles from './styles';
import AboutData from '../components/AboutData';

export interface AboutProps {}

const AboutPage: React.FC<AboutProps> = () => {
  const dispatch = useDispatch();
  const aboutData = useSelector(
    (state: { aboutPage: AboutPageState }) => state.aboutPage.about
  );
  const isLoading = useSelector(
    (state: { aboutPage: AboutPageState }) => state.aboutPage.isLoading
  );
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes.pageTitle}>
        <Typography variant="h3" component="h3">
          About page
        </Typography>
      </div>
      <div className={classes.pageContent}>
        {isLoading ? <Loading /> : <AboutData about={aboutData} />}
      </div>
    </Layout>
  );
};

export default AboutPage;
