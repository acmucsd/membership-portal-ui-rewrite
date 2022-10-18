import cookie from 'cookie';

export const noop = () => {};

export const parseCookies = (req: any) =>
  cookie.parse(req ? req.headers.cookie || '' : document.cookie);

export const toastWithSubtitle = (title: string, subtitle: string) => {
  return (
    <div
      style={{
        padding: '16px 24px',
      }}
    >
      <div
        style={{
          marginBottom: '8px',
          color: '#000000d9',
          fontSize: '16px',
          lineHeight: '24px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: '14px',
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};
