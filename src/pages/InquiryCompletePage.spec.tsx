import { formatRate1000 } from 'pages/InquiryCompletePage';

describe('formatRate1000', () => {
  [
    { scenario: '0.0%', rate: 0, want: '0.0%' },
    { scenario: '0.1%', rate: 1, want: '0.1%' },
    { scenario: '1.2%', rate: 12, want: '1.2%' },
    { scenario: '3.7%', rate: 37, want: '3.7%' },
    { scenario: '12.1%', rate: 121, want: '12.1%' },
  ].forEach(s =>
    test(s.scenario, () => {
      expect(formatRate1000(s.rate)).toBe(s.want);
    })
  );
});
