import React, {Component} from 'react';
import {TimelineMax, Power1} from 'gsap';
import GSAP from 'react-gsap-enhancer';

import {isCenter, getDirection, DIRECTIONS} from '../station';
import {sizes} from '../constants';
import pod from '../img/pod.svg';
import hub from '../img/hub';

const getAnimationProps = (direction, isOriginStation) => {
  let curve, z, scaleBegin, scaleEnd, west = false;

  if(isOriginStation) {
    scaleBegin = 1;

    switch(direction) {
      case DIRECTIONS.northwest:
        [curve, z, scaleEnd, west] = [hub.paths.back_left.bezier, 2, 0.33, true];
        break;
      case DIRECTIONS.northeast:
        [curve, z, scaleEnd] = [[...hub.paths.back_right.bezier].reverse(), 2, 0.33];
        break;
      case DIRECTIONS.southwest:
        [curve, z, scaleEnd, west] = [[...hub.paths.front_left.bezier].reverse(), 2, 2, true];
        break;
      default:
        [curve, z, scaleEnd] = [hub.paths.front_right.bezier, 6, 2];
    }
  } else {
    scaleEnd = 1;

    switch(direction) {
      case DIRECTIONS.northwest:
        [curve, z, scaleBegin, west] = [[...hub.paths.front_right.bezier].reverse(), 6, 2, true];
        break;
      case DIRECTIONS.northeast:
        [curve, z, scaleBegin] = [hub.paths.front_left.bezier, 6, 2];
        break;
      case DIRECTIONS.southwest:
        [curve, z, scaleBegin, west] = [hub.paths.back_right.bezier, 2, 0.33, true];
        break;
      default:
        [curve, z, scaleBegin] = [[...hub.paths.back_left.bezier].reverse(), 2, 0.33];
    }
  }

  return {
    z,
    curve,
    scaleBegin,
    scaleEnd,
    west
  };
};

const rotationMap = {
  [DIRECTIONS.northeast]: 0,
  [DIRECTIONS.northwest]: -180,
  [DIRECTIONS.southeast]: 90,
  [DIRECTIONS.southwest]: 90
};

const moveAnimation = ({target, options}) => {
  const {props, removePod, isOriginStation} = options;
  const {z, curve, scaleBegin, scaleEnd, west} = props;
  const pod = target.find({name: 'pod'});

  const timeline = new TimelineMax()
    .set(pod, {scale: 0, opacity:0, x: curve[0].x, y: curve[0].y + 350})
    .set(pod, {css:{zIndex: z}})
    .add('appear')
    .to(pod, 1, {opacity: 1, y: curve[0].y, scale: scaleBegin, scaleY: west ? -scaleBegin : scaleBegin, ease: Power1.easeIn})
    .add('move')
    .to(pod, 5, {scale: scaleEnd, scaleY: west ? -scaleEnd : scaleEnd, bezier:{type:"cubic", values: curve}, force3D:true, ease: Power1.easeInOut});

  if(!isOriginStation) {
    timeline
      .add('bounce')
      .to(pod, 0.3,{rotation: west ? 180 : 0}, 'bounce')
      .to(pod, 0.6, {scaleX: 0.8, scaleY: west ? -0.8 : 0.8, y: '-=50px', repeat: 4, yoyo: true}, 'bounce')
  }
  timeline
    .add('dissapear')
    .to(pod, 3, {scale: 0, opacity: 0, y: '+=350px', onComplete: removePod});

  return timeline;
};

class Pod extends Component {
  componentDidMount() {
    const {query: {origin, destination}} = this.props;
    const direction = getDirection(origin, destination);
    const isOriginStation = isCenter(origin);
    this.addAnimation(
      moveAnimation,
      {
        props: getAnimationProps(direction, isOriginStation),
        removePod: this.removePod,
        isOriginStation,
      }
    );
  }

  removePod = () => {
    const {removePod, query} = this.props;
    removePod(query);
  }

  render() {
    const {origin, destination} = this.props.query;
    const rotate = rotationMap[getDirection(origin, destination)];

    const style = {
      marginTop: '220px',
      marginLeft: '-120px',
      position: 'absolute',
      transform: `rotate(${rotate}deg)`,
      width: sizes.pod.width,
      height: sizes.pod.height,
    }

    return (
      <div>
        <img style={style} name="pod" src={pod} alt="An iRail query" />
      </div>
    );
  }
}
export default GSAP()(Pod);
