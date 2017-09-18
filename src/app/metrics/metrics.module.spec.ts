import { MetricsModule } from './metrics.module';

describe('MetricsModule', () => {
  let metricsModule: MetricsModule;

  beforeEach(() => {
    metricsModule = new MetricsModule();
  });

  it('should create an instance', () => {
    expect(metricsModule).toBeTruthy();
  });
});
