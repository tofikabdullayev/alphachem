import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
        <Button variant="outlined" color="primary">
          <AddIcon />
        </Button>
      </div>
      <div className={classes.pageContent}>
        {!isLoading ? <AboutData about={aboutData} /> : <Loading />}
      </div>
    </Layout>
  );
};

export default AboutPage;
