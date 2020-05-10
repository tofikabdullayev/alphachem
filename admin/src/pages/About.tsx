import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Loading from '../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { AboutPageState } from './../store/reducers/about';
import { getAbout, updateAbout } from '../store/actions/about';
import { About } from '../store/interfaces';
import useStyles from './styles';
import DataTabs from '../components/DataTabs/DataTabs';

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

  const onUpdate = (about: About) => {
    dispatch(updateAbout(about, about._id as string));
  };

  return (
    <Layout>
      <div className={classes.pageTitle}>
        <Typography variant="h3" component="h3">
          About
        </Typography>
      </div>
      <div className={classes.pageContent}>
        {isLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={3}>
            {aboutData.map((v) => (
              <Grid item sm={12} key={v._id}>
                <DataTabs onUpdate={onUpdate} data={v} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Layout>
  );
};

export default AboutPage;
