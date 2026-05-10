import type { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry?.constructor.name === 'Function') {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => {
      console.error('Web Vitals error:', error);
    });
  }
};

export default reportWebVitals;