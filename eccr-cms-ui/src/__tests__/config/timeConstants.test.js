import {
  fiveMinutes,
  fortyFiveMinutes,
  oneHour,
  oneMinute,
  tenMinutes,
  thirtyMinutes,
  twentyFourHours,
  twentyMinutes
} from '../../config/timeConstants';

describe('timeConstants', () => {
  it('should export oneMinute as 60000 ms', () => {
    expect(oneMinute).toBe(60000);
  });

  it('should export fiveMinutes as 300000 m', () => {
    expect(fiveMinutes).toBe(300000);
  });

  it('should export tenMinutes as 600000 m', () => {
    expect(tenMinutes).toBe(600000);
  });

  it('should export twentyMinutes as 1200000 ms', () => {
    expect(twentyMinutes).toBe(1200000);
  });

  it('should export thirtyMinutes as 1800000 mss', () => {
    expect(thirtyMinutes).toBe(1800000);
  });

  it('should export fortyFiveMinutes as 2700000 ms', () => {
    expect(fortyFiveMinutes).toBe(2700000);
  });

  it('should export oneHour as 3600000 ms', () => {
    expect(oneHour).toBe(3600000);
  });

  it('should export twentyFourHours as 86400000 ms', () => {
    expect(twentyFourHours).toBe(86400000);
  });
});
