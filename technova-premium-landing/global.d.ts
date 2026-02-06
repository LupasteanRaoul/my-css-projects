
// Aceste declarații opresc erorile "Cannot find module" în VS Code.
// Ele îi spun lui TypeScript că aceste module vor fi disponibile la momentul rulării.

declare module 'react' {
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export type Dispatch<A> = (value: A) => void;

  // Define generic hooks to allow type arguments in components
  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps?: any[]): T;
  export function createContext<T>(defaultValue: T): any;
  
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;
  export type FormEvent<T = Element> = {
    preventDefault(): void;
    target: T;
  } & any;

  const React: {
    useState: typeof useState;
    useEffect: typeof useEffect;
    useRef: typeof useRef;
    useMemo: typeof useMemo;
    useCallback: typeof useCallback;
    createContext: typeof createContext;
    FC: typeof FC;
  };
  export default React;
}

declare module 'react-dom/client' {
  const ReactDOM: {
    createRoot(container: Element | DocumentFragment): any;
  };
  export default ReactDOM;
}

declare module '@google/genai' {
  export class GoogleGenAI {
    constructor(config: { apiKey: string });
    models: {
      generateContent(params: {
        model: string;
        contents: any;
        config?: any;
      }): Promise<{ text: string; [key: string]: any }>;
    };
    chats: any;
    live: any;
    operations: any;
  }
  export const Modality: any;
  export const Type: any;
}

// Declare process.env for API_KEY access throughout the application
declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string;
  };
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly API_KEY: string;
}
