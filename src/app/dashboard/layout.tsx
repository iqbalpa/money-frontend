'use client';

import { useAuth } from '@/hooks/useAuth';
import { AuthContext } from '@/context/AuthContext';
import Header from '@/components/header/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, login, logout } = useAuth();
  return (
    <html>
      <body>
        <AuthContext.Provider
          value={{
            user,
            setUser(user) {
              login(user);
            },
          }}
        >
          <Header />
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
