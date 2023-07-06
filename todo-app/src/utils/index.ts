const getApiUrl = (): string =>
  process.env.API_URL || "http://localhost:8000/api";

export { getApiUrl };
