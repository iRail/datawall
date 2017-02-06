import React, {Component} from 'react';
import {TimelineMax, TweenLite, Power1} from 'gsap';
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
    rotate: -180,
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
  const pod = target.find({name: 'pod'});
  const originIsGhent = isCenter(origin);
  let curve, scaleBegin, scaleEnd, west = false;

  if(originIsGhent && direction === DIRECTIONS.northwest) {
    curve = hub.paths.back_left.bezier;
    scaleBegin = 1;
    scaleEnd = 0.33;
    west = true;
  } else if(originIsGhent && direction === DIRECTIONS.northeast) {
    curve = [...hub.paths.back_right.bezier].reverse();
    scaleBegin = 1;
    scaleEnd = 0.33;
  } else if(originIsGhent && direction === DIRECTIONS.southwest) {
    curve = [...hub.paths.front_left.bezier].reverse();
    scaleBegin = 1;
    scaleEnd = 2.5;
    west = true;
  } else if(originIsGhent && direction === DIRECTIONS.southeast) {
    curve = hub.paths.front_right.bezier;
    scaleBegin = 1;
    scaleEnd = 2.5;
  } else if(!originIsGhent && direction === DIRECTIONS.northwest) {
    curve = [...hub.paths.front_right.bezier].reverse();
    scaleBegin = 2.5;
    scaleEnd = 1;
    west = true;
  } else if(!originIsGhent && direction === DIRECTIONS.northeast) {
    curve = hub.paths.front_left.bezier;
    scaleBegin = 2.5;
    scaleEnd = 1;
  } else if(!originIsGhent && direction === DIRECTIONS.southwest) {
    curve = hub.paths.back_right.bezier;
    scaleBegin = 0.33;
    scaleEnd = 1;
    west = true;
  } else if(!originIsGhent && direction === DIRECTIONS.southeast) {
    curve = [...hub.paths.back_left.bezier].reverse();
    scaleBegin = 0.33;
    scaleEnd = 1;
  }

  console.log(originIsGhent, scaleBegin, scaleEnd, direction, direction === DIRECTIONS.southeast);

  return new TimelineMax()
    .set(pod, {scale: 0, opacity:0, x: curve[0].x, y: curve[0].y})
    .add('appear')
    .to(pod, 1, {opacity: 1, scale: scaleBegin, scaleY: west ? -scaleBegin : scaleBegin, ease: Power1.easeIn})
    .add('move')
    .to(pod, 10, {scale: scaleEnd, scaleY: west ? -scaleEnd : scaleEnd, bezier:{type:"cubic", values: curve}, force3D:true, ease: Power1.easeInOut})
    .add('dissapear')
    .to(pod, 0.5, {scale: 0.9, y: '-=30px', repeat: 3, yoyo: true})
    .to(pod, 3, {scale: 0, opacity: 0});
};

class Pod extends Component {
  componentDidMount() {
    const {origin, destination} = this.props;
    this.addAnimation(moveAnimation, {origin, destination});
  }

  render() {
    const {origin, destination} = this.props;
    const direction = getDirection(origin, destination);
    const z = zIndex.pod[direction];
    const {scaleX, scaleY, rotate} = POSITIONS[direction];

    const style = {
      marginTop: '200px',
      marginLeft: '-150px',
      position: 'absolute',
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      width: sizes.pod.width,
      height: sizes.pod.height,
    }
    console.log(style.transform);
    return (
      <div>
        <img style={style} name="pod" src={pod} alt="a lookup" />
      </div>
    );
  }
}
export default GSAP()(Pod);
