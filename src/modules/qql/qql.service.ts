import { Injectable, Logger } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { AppConfigService } from '../../app_config/app_config.service';

@Injectable()
export class QqlService {
  private readonly logger = new Logger(QqlService.name);
  private client: GraphQLClient;

  constructor(private readonly appConfigService: AppConfigService) {
    this.client = new GraphQLClient(this.appConfigService.getGraphqlEndpoint());
  }

  async request<T>(query: any, variables?: any): Promise<T> {
    try {
      return await this.client.request<T>(query, variables);
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to fetch data from the GraphQL API.');
    }
  }
}
