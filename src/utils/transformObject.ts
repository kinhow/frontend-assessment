export function camelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, group => {
    return group.toUpperCase().replace('-', '').replace('_', '');
  });
}

export function transformObject<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(item => transformObject(item)) as unknown as T;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const transformedKey = camelCase(key);
      acc[transformedKey] = transformObject((obj as Record<string, unknown>)[key]);
      return acc;
    }, {} as Record<string, unknown>) as T;
  }
  return obj;
}
