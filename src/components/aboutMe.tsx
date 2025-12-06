import profileImg from './images/asdasdPNG.png';
import HaloType from './typingAboutMe'

export function AboutMe() {
    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center', // INI YANG KURANG!
            gap: '2rem',
            minHeight: '90vh' // Biar centered secara vertikal juga
        }}>
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

            <div style={{
                justifyContent: 'flex-start',
                fontFamily: 'monospace, monospace',
                maxWidth: '60%',
                animation: 'slideUp 0.7s ease-out forwards',
                pointerEvents: 'auto',
                animationDelay: '0.1s',
                opacity: 0
            }}>
                <h1 style={{ marginTop: -20, marginBottom: 20, fontSize: 70, fontFamily: 'monospace', letterSpacing: -5, wordSpacing: -12 }}>About me.</h1>
                <HaloType></HaloType>
                <div style={{ marginTop: 50, maxWidth: 600, textAlign: 'justify', lineHeight: 1.6, fontSize: 16, color: '#333' }}>
                    <p>Welcome to the Internet! Once again, let me introduce myself, Im Muhammad Tsaqib Adha, but you can call me Tsaqib or Qibe. Im currently studying Informatics at Universitas Gunadarma, and im in my first semester. I have a strong passion for programming, and right now, Im focusing on a few roles that are listed on my homepage.</p>
                    <p>Im also really interested in learning new tech stacks, which seem to keep growing and evolving every day. As a software developer, its important to adapt and stay updated with these tech stacks.</p>
                    <p>Feel free to reach out to me through the contact page!</p>
                </div>
            </div>

            <div style={{
                position: 'relative',
                marginRight: '1rem',
                animation: 'slideUp 0.6s ease-out forwards',
                pointerEvents: 'auto',
                animationDelay: '0.2s',
                opacity: 0
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    width: '324px',
                    height: '390px',
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    transform: 'translate(2px, 5px)',
                    background: 'linear-gradient(to bottom right, rgba(144, 163, 204, 0.5), rgba(102, 166, 250, 0.85))',
                    border: '2px solid rgba(125, 162, 204, 1)'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, rgba(207, 218, 233, 1) 7px, transparent 0px)',
                        backgroundSize: '28.5px 3px'
                    }}></div>
                </div>

                <div style={{
                    position: 'relative',
                    width: '311px',
                    height: '380px',
                    background: 'linear-gradient(to bottom right, rgb(38, 38, 38), rgb(23, 23, 23))',
                    borderRadius: '1.5rem',
                    border: '3px solid rgba(88, 87, 120, 1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden'
                }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={profileImg} alt="Profile" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'scale-down',
                            objectPosition: 'center',
                            transform: 'scale(1.47)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent, transparent)'
                        }}></div>
                    </div>

                    <div style={{
                        position: 'absolute',
                        left: '-0.125rem',
                        bottom: '0.5rem',
                        right: 0,
                        paddingLeft: '0.75rem',
                        paddingRight: '0.75rem',
                        textAlign: 'left'
                    }}>
                        <h5 style={{
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            marginBottom: '0.125rem'
                        }}>
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