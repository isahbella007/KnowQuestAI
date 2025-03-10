// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { usePathname } from 'next/navigation';

import { ActionMap, AuthState, AuthUser, AccountContextType } from '../@types/auth';

enum Types {
  Initial = 'INITIALIZE',
  Login = 'LOGIN',
}

type JWTAuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
    loading: boolean;
    usage: object;
  };
 
};

export type JWTActions = ActionMap<JWTAuthPayload>[keyof ActionMap<JWTAuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: {
    role: {
      allowedRoutes: [],
      permissions: [],
    },
  },
  accessToken: '',
  loading: false,
  error: null,
};

const JWTReducer = (state: AuthState, action: JWTActions) => {
  console.log('JWTReducer => state', state);
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'INITIALIZE':
      return {
        ...state,
        error: null,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
        loading: action.payload.loading,
        usage: action.payload.usage,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AccountContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  console.log('AuthProvider -> state:', state);
  const router = usePathname();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const initialize = async () => {
    console.log('hiiii')
  };


 

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
