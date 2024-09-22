import { useEffect, useState } from 'react';
import './Login.css';
import { supabase } from '../supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            if (session) {
                navigate('/');
            }
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, newSession) => {
            setSession(newSession);
            if (newSession) {
                localStorage.setItem('authToken', newSession.access_token);
                navigate('/');
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [navigate]);


    return (
        <div className="login-container">
            <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#1c1b1f',
                                brandAccent: '#22C55E',
                                background: '#121212',
                                inputBackground: '#1f1f1f',
                                inputText: '#fff',
                                text: '#fff',
                            },
                            dimensions: {
                                borderRadius: '8px',
                                inputPadding: '12px 16px',
                                buttonPadding: '12px 24px',
                            },
                        },
                    },
                }}
                providers={['google']}
                magicLink={false}
            />
        </div>
    );
}
