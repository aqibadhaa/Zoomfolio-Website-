import profileImg from './images/asdasdPNG.png';



export function AboutMe() {
    return (
        <div style={{ padding: '20px' }}>
            <style>
                {`
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes bounce {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }
                `}
            </style>

            <div style={{ justifyContent: 'left', fontFamily: 'Arial, sans-serif' }}>
                <h1>About Me</h1>
                <p>Hello! I'm a passionate developer with a love for creating intuitive and dynamic web applications. I enjoy learning new technologies and improving my skills.</p>
                <p>In my free time, I like to explore photography, travel, and spend time with friends and family.</p>
                <p>Feel free to reach out to me through the contact page!</p>
            </div>

            <div style={{ position: 'relative', marginRight: '-10rem', animation: 'slideUp 0.6s ease-out forwards', pointerEvents: 'auto', animationDelay: '0.2s', opacity: 0 }}>
                <div style={{ position: 'absolute', inset: 0, width: '274px', height: '340px', borderRadius: '2rem', overflow: 'hidden', transform: 'translate(2px, 5px)', background: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(29, 78, 216)),', border: '2px solid rgba(125, 162, 204, 1)' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(211, 245, 255, 0.8) 7px, transparent 0px)', backgroundSize: '28.5px 3px' }}></div>
                </div>

                <div style={{ position: 'relative', width: '261px', height: '330px', background: 'linear-gradient(to bottom right, rgb(38, 38, 38), rgb(23, 23, 23))', borderRadius: '1.5rem', border: '3px solid rgba(88, 87, 120, 1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={profileImg} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'scale-down', objectPosition: 'center', transform: 'scale(1.47)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)' }}></div>
                    </div>

                    <div onClick={() => window.open('https://linkedin.com/in/muhammad-tsaqib-adha-', '_blank')} style={{ position: 'absolute', bottom: '3rem', right: '1rem', width: '3.5rem', height: '3.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(189, 186, 100, 0.5)', animation: 'bounce 1s infinite', cursor: 'pointer', background: '#bdba64' }}>
                        <svg style={{ width: '2rem', height: '2rem', color: 'rgb(23, 23, 23)' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span style={{ color: 'rgb(23, 23, 23)', fontWeight: 500, fontSize: '8px' }}>LinkedIn</span>
                    </div>

                    <div style={{ position: 'absolute', left: '-0.125rem', bottom: '0.5rem', right: 0, paddingLeft: '0.75rem', paddingRight: '0.75rem', textAlign: 'left' }}>
                        <h5 style={{ color: 'white', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.125rem' }}>
                            Undergraduate Informatics Student
                        </h5>
                        <p style={{ color: 'rgb(212, 212, 212)', fontSize: '10px' }}>at Gunadarma University</p>
                    </div>


                </div>
            </div>

        </div>
    );
}
export default AboutMe;