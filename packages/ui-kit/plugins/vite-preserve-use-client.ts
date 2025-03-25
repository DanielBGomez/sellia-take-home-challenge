export function preserveUseClient() {
  return {
    name: 'preserve-use-client',
    renderChunk(code: string, chunk: any) {
      // Verificamos si ya está presente
      if (
        code.startsWith('"use client";') ||
        code.startsWith("'use client';")
      ) {
        return null;
      }

      // Heurística simple: si contiene JSX y React hooks, asumimos que es client
      const isClientComponent =
        /use(State|Effect|Context|Reducer|Ref|Callback|Memo)/.test(code) ||
        /React.createContext/.test(code);

      if (isClientComponent) {
        return {
          code: `"use client";\n${code}`,
          map: null,
        };
      }

      return null;
    },
  };
}
