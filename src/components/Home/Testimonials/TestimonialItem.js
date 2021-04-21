import React from 'react';
import { useSpring, animated } from 'react-spring';
import reviewSvg from '../../../images/review-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialItem = ({review}) => {

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    
    return (
        <div class="col-lg-3 text-center mb-3">
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans), padding: '20px', borderRadius: '20px', overflow: 'hidden', boxShadow: '3px 5px #ed393c' }}
            > <div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-8">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" src={reviewSvg} alt="" />
                        </div>
                    </div>
                    <h3 style={{ height: '35px' }}>{review.name}</h3>
                    <p style={{ height: '25px' }}>{review.company}</p>
                    <p style={{ height: '45px' }}>{review.description}</p>
                    <p style={{ height: '25px' }}>Rating: {review.satisfactionLevel}<span style={{ color: '#ffd700'}}><FontAwesomeIcon icon={faStar} /></span></p>
                </div>
            </animated.div>
        </div>
    );
};

export default TestimonialItem;