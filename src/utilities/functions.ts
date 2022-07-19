export const isPropertyAccessible = (
  data: unknown
): data is Record<string, unknown> => data !== null;
