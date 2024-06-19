import { Inject, Injectable, Logger } from '@nestjs/common';
import * as AWS from '@aws-sdk/client-ses';
import { fromSSO } from '@aws-sdk/credential-providers';
import { AppConfigService } from '../../app_config/app_config.service';

@Injectable()
export class SesService {
  private readonly Source: string;
  private readonly SourceArn: string;
  private readonly Charset: string = 'UTF-8';
  private readonly logger = new Logger(SesService.name);
  private readonly client: AWS.SES;

  constructor(private readonly appConfigService: AppConfigService) {
    const source_arn = this.appConfigService.getSourceArn();
    const email_from = 'dev@jellylabs.org';
    const region = this.appConfigService.getAWSRegion();

    const isLocal = this.appConfigService.getEnvironment() === 'local';

    const config: any = {
      region: region,
    };

    if (isLocal)
      config.credentials = fromSSO({
        profile: 'jelly-dev',
      });

    this.Source = email_from;
    this.SourceArn = source_arn;
    this.client = new AWS.SES(config);
  }

  async sendTextEmail(
    to: string,
    subject: string,
    text: string,
  ): Promise<void> {
    try {
      this.logger.debug('Sending: ' + subject + ' to: ' + to);
      await this.client.sendEmail({
        Destination: { ToAddresses: [to] },
        Message: {
          Subject: { Charset: this.Charset, Data: subject },
          Body: {
            Html: {
              Data: text,
            },
          },
        },
        SourceArn: this.SourceArn,
        Source: this.Source,
      });
      this.logger.debug('Sent: ' + subject + ' to: ' + to);
    } catch (e) {
      this.logger.error('Failed to send email: ' + e.message);
    }
  }
}
