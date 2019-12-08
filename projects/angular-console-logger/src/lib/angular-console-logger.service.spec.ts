import { TestBed } from '@angular/core/testing';
import { AngularConsoleLoggerService } from './angular-console-logger.service';
import { LoggerConfig } from './logger.config';

describe('AngularConsoleLoggerService', () => {
  const loggerConfig:LoggerConfig =  {
    isProduction: false,
    appPrefix: 'message'
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: LoggerConfig, useValue: loggerConfig }
    ]
  }));

  it('should be created', () => {
    const service: AngularConsoleLoggerService = TestBed.get(AngularConsoleLoggerService);
    expect(service).toBeTruthy();
  });

  it('warn should be called when production is false', () => {
    const service = new AngularConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: false
    });

    const spy = spyOn(console, 'warn');

    service.warn('this is a test');
    expect(spy).toHaveBeenCalled();
  });


  it('warn should not be called when production is true', () => {
    const service = new AngularConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: true
    });

    const spy = spyOn(console, 'warn');

    service.warn('this is a test');
    expect(spy).not.toHaveBeenCalled();
  });

  it('logged message should have defined a prefix', () => {
    const service = new AngularConsoleLoggerService({
      appPrefix: 'anything',
      isProduction: false
    });

    const spy = spyOn(console, 'log');

    service.info('my message');

    expect(spy).toHaveBeenCalledWith('anything: my message');
  });

});
