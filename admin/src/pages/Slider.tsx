import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Loading from '../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { SliderPageState } from './../store/reducers/slider';
import { getSlider, updateSlider } from '../store/actions/slider';
import { Slider } from '../store/interfaces';
import useStyles from './styles';
import DataTabs from '../components/DataTabs/DataTabs';

export interface SliderProps {}

const SliderPage: React.FC<SliderProps> = () => {
  const dispatch = useDispatch();
  const sliderData = useSelector(
    (state: { sliderPage: SliderPageState }) => state.sliderPage.slides
  );
  const isLoading = useSelector(
    (state: { sliderPage: SliderPageState }) => state.sliderPage.isLoading
  );
  const classes = useStyles();

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch]);

  const onUpdate = (slider: Slider) => {
    dispatch(updateSlider(slider, slider._id as string));
  };
  return (
    <Layout>
      <div className={classes.pageTitle}>
        <Typography variant="h3" component="h3">
          Slider
        </Typography>
      </div>
      <div className={classes.pageContent}>
        {isLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={3}>
            {sliderData.map((v) => (
              <Grid item sm={6} key={v._id}>
                <DataTabs onUpdate={onUpdate} data={v} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Layout>
  );
};

export default SliderPage;
