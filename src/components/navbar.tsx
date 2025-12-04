import { Image, User, Terminal } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const dockItems = [
    { icon: User, label: "Aboute me", color: "linear-gradient(to bottom right, #fbbf24, #f59e0b)", path: "/contacts" },
    { icon: Image, label: "Photos", color: "linear-gradient(to bottom right, #20002c, #fbbf99, #cbb4d4)", path: "/photos" },
    { icon: Terminal, label: "Project", color: "linear-gradient(to bottom right, #1f2937, #111827)", path: "/terminal" },

];

export function BottomNav() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(40px)',
                borderRadius: '16px',
                padding: '8px 12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 14
                }}>
                    {dockItems.map((item, index) => {
                        const Icon = item.icon;
                        const isHovered = hoveredIndex === index;
                        const isActive = location.pathname === item.path;
                        const scale = isHovered ? 1.1 : 1;


                        return (
                            <button
                                key={item.label}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => navigate(item.path)}
                                style={{
                                    position: 'relative',
                                    transform: `scale(${scale})`,
                                    transition: 'transform 0.4s ease,',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    padding: 0
                                }}
                                aria-label={item.label}
                            >
                                <div style={{
                                    width: isHovered ? '150px' : '81px',
                                    height: '56px',
                                    borderRadius: '60px',
                                    background: item.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: isHovered
                                        ? '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    transition: 'box-shadow 0.2s ease, width 0.4s ease',
                                    position: 'relative'
                                }}>
                                    <Icon style={{
                                        width: '28px',
                                        height: '28px',
                                        color: 'white',
                                        strokeWidth: 2
                                    }} />

                                    {isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-4px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '90%',
                                            height: '4px',
                                            backgroundColor: 'darkgray',
                                            borderRadius: '50%',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                                        }}></div>
                                    )}
                                </div>

                                {isHovered && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                                        color: 'white',
                                        fontSize: '12px',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        backdropFilter: 'blur(8px)'
                                    }}>
                                        {item.label}
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default BottomNav;