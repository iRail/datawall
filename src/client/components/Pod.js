import React, { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import GSAP from 'react-gsap-enhancer';

import { isCenter, getDirection, DIRECTIONS } from '../../station';
import { sizes } from '../../constants';
import pod from '../img/pod.svg';
import hub from '../img/hub';

const getAnimationProps = (direction, isOriginStation) => {
  let curve, z, scaleBegin, scaleEnd, west = false;

  if (isOriginStation) {
    scaleBegin = 1;

    switch (direction) {
      case DIRECTIONS.northwest:
        [curve, z, scaleEnd, west] = [
          hub.paths.back_left.bezier,
          2,
          0.33,
          true,
        ];
        break;
      case DIRECTIONS.northeast:
        [curve, z, scaleEnd] = [
          [...hub.paths.back_right.bezier].reverse(),
          2,
          0.33,
        ];
        break;
      case DIRECTIONS.southwest:
        [curve, z, scaleEnd, west] = [
          [...hub.paths.front_left.bezier].reverse(),
          6,
          2,
          true,
        ];
        break;
      default:
        [curve, z, scaleEnd] = [hub.paths.front_right.bezier, 6, 2];
    }
  } else {
    scaleEnd = 1;

    switch (direction) {
      case DIRECTIONS.northwest:
        [curve, z, scaleBegin, west] = [
          [...hub.paths.front_right.bezier].reverse(),
          6,
          2,
          true,
        ];
        break;
      case DIRECTIONS.northeast:
        [curve, z, scaleBegin] = [hub.paths.front_left.bezier, 6, 2];
        break;
      case DIRECTIONS.southwest:
        [curve, z, scaleBegin, west] = [
          hub.paths.back_right.bezier,
          2,
          0.33,
          true,
        ];
        break;
      default:
        [curve, z, scaleBegin] = [
          [...hub.paths.back_left.bezier].reverse(),
          2,
          0.33,
        ];
    }
  }

  return {
    z,
    curve,
    scaleBegin,
    scaleEnd,
    west,
  };
};

const rotationMap = {
  [DIRECTIONS.northeast]: 0,
  [DIRECTIONS.northwest]: -180,
  [DIRECTIONS.southeast]: 90,
  [DIRECTIONS.southwest]: 90,
};

const moveAnimation = ({ target, options }) => {
  const { props, removePod, isOriginStation } = options;
  const { z, curve, scaleBegin, scaleEnd, west } = props;
  const pod = target.find({ name: 'pod' });

  const timeline = new TimelineMax()
    .set(pod, { scale: 0, opacity: 0, x: curve[0].x, y: curve[0].y + 350 })
    .set(pod, { css: { zIndex: z } })
    .add('appear')
    .to(pod, 1, {
      opacity: 1,
      y: curve[0].y,
      scale: scaleBegin,
      scaleY: west ? -scaleBegin : scaleBegin,
      ease: Power1.easeIn,
    })
    .add('move')
    .to(pod, 5, {
      scale: scaleEnd,
      scaleY: west ? -scaleEnd : scaleEnd,
      bezier: { type: 'cubic', values: curve },
      ease: Power1.easeInOut,
    });

  if (!isOriginStation) {
    let randomDistanceX = (Math.random() * 50) + 70;
    randomDistanceX *= Math.floor(Math.random()*2) === 1 ? 1 : -1;

    const floatTimeline = new TimelineMax({repeat: 7, yoyo: true})
      .to(pod, 1, { x: `-=${2*randomDistanceX}px`})
      .to(pod, 1, { x: `+=${2*randomDistanceX}px`})

    timeline
      .to(pod, 0.5, { x: `+=${randomDistanceX}px`})
      .add('move around')
      .to(pod, 0.3, { rotation: west ? 180 : 0 }, 'move around')
      .to(
        pod,
        4,
        {
          scaleX: 1.2,
          scaleY: west ? -1.2 : 1.2,
          y: '-=150px',
          repeat: 3,
          yoyo: true,
        },
        'move around',
      )
      .add(floatTimeline, 'move around')
      .to(pod, 0.5, { x: `-=${randomDistanceX}px`})

  }

  timeline
    .add('dissapear')
    .to(pod, 2, { scale: 0, opacity: 0, y: '+=150px', onComplete: removePod });

  return timeline;
};

class Pod extends Component {
  componentDidMount() {
    const { query: { origin, destination } } = this.props;
    const direction = getDirection(origin, destination);
    const isOriginStation = isCenter(origin);

    this.addAnimation(moveAnimation, {
      props: getAnimationProps(direction, isOriginStation),
      removePod: this.removePod,
      isOriginStation,
    });
  }

  removePod = () => {
    const { removePod, query } = this.props;
    removePod(query);
  };

  render() {
    const { origin, destination } = this.props.query;
    const rotate = rotationMap[getDirection(origin, destination)];

    const style = {
      marginTop: '2.5em',
      marginLeft: '-1em',
      position: 'absolute',
      transform: `rotate(${rotate}deg)`,
      width: sizes.pod.width,
      height: sizes.pod.height,
    };

    return (
      <div>
        <img style={style} name="pod" src={pod} alt="An iRail query" />
      </div>
    );
  }
}
export default GSAP()(Pod);
