interface ConfigType {
  apiBase: string;
}

const config: ConfigType = {
  apiBase: process.env.NEXT_PUBLIC_API_URL || 'https://api.acmucsd.com/api/v2',
};

export default config;
