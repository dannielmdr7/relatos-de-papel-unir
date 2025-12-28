/**
 * Manager para obtener variables de entorno
 */
export const envManager = {
  get(key: string): string | undefined {
    // En Vite, las variables de entorno deben empezar con VITE_
    if (key === "ENV") {
      return (
        import.meta.env.VITE_ENVIRONMENT ||
        import.meta.env.MODE ||
        "mocked"
      );
    }
    return import.meta.env[`VITE_${key}`] as string | undefined;
  },
};
