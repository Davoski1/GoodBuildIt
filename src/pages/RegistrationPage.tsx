import React, { useEffect } from 'react';

interface RegistrationPageProps {
  registrationUrl: string;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ registrationUrl }) => {
  useEffect(() => {
    window.location.replace(registrationUrl);
  }, [registrationUrl]);

  return (
    <main
      className="container"
      style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}
    >
      <div>
        <p style={{ color: 'var(--grey-600)', marginBottom: '12px' }}>
          Opening the scholarship pre-registration form…
        </p>
        <a href={registrationUrl} style={{ color: 'var(--violet)', fontWeight: 700 }}>
          Continue to the form
        </a>
      </div>
    </main>
  );
};
