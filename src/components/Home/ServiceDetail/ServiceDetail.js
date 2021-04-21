import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const ServiceDetail = ({ service }) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (
        <div  className="col-md-4 mb-2">
            <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans), padding: '20px' ,borderRadius: '20px', overflow: 'hidden', boxShadow: '3px 5px #ed393c' }}
            >
            <h5 style={{ height: '35px'}} className="mt-3 mb-3">{service.serviceTitle}</h5>
            <div className="row d-flex">
                <div className="col-3 p-t-3">
                    <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
                <div className="col-9">
                    <p style={{ height: '135px'}} className="text-secondary text-start">{service.serviceDescription}</p>

                </div>
            </div>
            </animated.div>



        </div>
    );
};

export default ServiceDetail;