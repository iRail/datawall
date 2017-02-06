import React, {Component} from 'react';
import {TimelineMax, TweenLite, Power0} from 'gsap';
import GSAP from 'react-gsap-enhancer';

import {isCenter, getDirection, DIRECTIONS} from '../station';
import {times, sizes, zIndex, animations} from '../constants';
import pod from '../img/pod.svg';
import hub from '../img/hub';

const POSITIONS = {
  center: {
    x: 0,
    y: 5
  },
  [DIRECTIONS.northeast]: {
    x: 60,
    y: -25,
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
    path: 'back_right'
  },
  [DIRECTIONS.northwest]: {
    x: -60,
    y: -25,
    scaleX: -1,
    scaleY: 1,
    rotate: 0,
    path: 'back_left'
  },
  [DIRECTIONS.southeast]: {
    x: 60,
    y: 20,
    scaleX: 1,
    scaleY: 1,
    rotate: 90,
    path: 'front_right'
  },
  [DIRECTIONS.southwest]: {
    x: -60,
    y: 20,
    scaleX: -1,
    scaleY: 1,
    rotate: 90,
    path: 'front_left'
  }
};

const moveAnimation = ({target, options}) => {
  const {origin, destination} = options;
  const direction = getDirection(origin, destination);
  const z = zIndex.pod[direction];
  const pod = target.find({name: 'pod'});
  let curve;
  const originIsGhent = isCenter(origin);
  let scaleBegin, scaleEnd;

  if(originIsGhent) {
    scaleBegin = 1;

    switch(direction) {
      case DIRECTIONS.northeast:
        curve = hub.paths.back_right.bezier;
        break;
      case DIRECTIONS.northwest:
        curve = hub.paths.back_left.bezier;
        break;
      case DIRECTIONS.southeast:
        curve = hub.paths.front_right.bezier;
        break;
      default:
        curve = hub.paths.front_left.bezier;
    }

    if(direction === DIRECTIONS.northeast || direction === DIRECTIONS.northwest) {
      scaleEnd = 0.33;
    } else {
      scaleEnd = 3;
    }
  } else {
    scaleEnd = 1;

    switch(direction) {
      case DIRECTIONS.northeast:
        curve = hub.paths.front_left.bezier;
        break;
      case DIRECTIONS.northwest:
        curve = hub.paths.front_right.bezier;
        break;
      case DIRECTIONS.southeast:
        curve = hub.paths.back_left.bezier;
        break;
      default:
        curve = hub.paths.back_right.bezier;
    }

    if(direction === DIRECTIONS.northeast || direction === DIRECTIONS.northwest) {
      scaleBegin = 0.33;
    } else {
      scaleBegin = 3;
    }
  }

  console.log(originIsGhent, scaleBegin, scaleEnd, direction);

  const values = originIsGhent ? [...curve].reverse() : curve;

  return new TimelineMax()
    .set(pod,{scale: scaleBegin, x: values[0].x, y: values[0].y})
    .add('move')
    .to(pod, 10, {scale: scaleEnd, bezier:{type:"cubic", values}, force3D:true})
    .to(pod, 2, {scale: 0.1, opacity: 0});
};

class Pod extends Component {
  componentDidMount() {
    console.log('pod mounted');
    const {origin, destination} = this.props;
    this.addAnimation(moveAnimation, {origin, destination});
  }

  render() {
    const {origin, destination} = this.props;
    const direction = getDirection(origin, destination);
    const z = zIndex.pod[direction];
    const {scaleX, scaleY, rotate} = POSITIONS[direction];
    const style = {
      marginTop: '250px',
      marginLeft: '-150px',
      position: 'absolute',
      transform: `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)`,
      zIndex: z,
      width: sizes.pod.width,
      height: sizes.pod.height,
    }
    return (
      <div>
        <img style={style} name="pod" src={pod} alt="a lookup" />
      </div>
    );
  }
}
export default GSAP()(Pod);
