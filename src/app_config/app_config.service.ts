import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getEnvironment(): string {
    return this.configService.get('NODE_ENV');
  }

  getSourceArn(): string {
    return this.configService.get('AWS_SES_SOURCE_ARN');
  }

  getAWSRegion(): string {
    return this.configService.get('AWS_SES_REGION');
  }

  getInfuraSepoliaUrl(): string {
    return this.configService.get('RPC_URL');
  }

  getPinataIpfsfUrl(): string {
    return this.configService.get('PINATA_IPFS_URL');
  }

  getPinataIpfsJwt(): string {
    return this.configService.get('PINATA_IPFS_JWT');
  }

  getGraphqlEndpoint(): string {
    return this.configService.get('API_GRAPHQL_ENDPOINT');
  }

  getGraphIPFSEndpoint(): string {
    return this.configService.get('GRAPHS_IPFS_API_ENDPOINT');
  }

  lpDistributionAddress(): string {
    return this.configService.get('LP_REWARD_DISTRIBUTION_ADDRESS');
  }

  stakingDistributionAddress(): string {
    return this.configService.get('STAKING_REWARD_DISTRIBUTION_ADDRESS');
  }

  chestAddress(): string {
    return this.configService.get('CHEST_ADDRESS');
  }

  minterAddress(): string {
    return this.configService.get('MINTER_ADDRESS');
  }

  dailySnapshotAddress(): string {
    return this.configService.get('DAILY_SNAPSHOT_ADDRESS');
  }

  governanceAddress(): string {
    return this.configService.get('GOVERNANACE_ADDRESS');
  }

  getPrivateKey(): string {
    return this.configService.get('PRIVATE_KEY');
  }

  dailySnapshotAbi(): any[] {
    const filePath = path.join(
      process.cwd(),
      'src',
      'abi',
      'daily-snapshot.abi.json',
    );

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }

  minterAbi(): any[] {
    const filePath = path.join(process.cwd(), 'src', 'abi', 'minter.abi.json');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }

  lpDistributionAbi(): any[] {
    const filePath = path.join(
      process.cwd(),
      'src',
      'abi',
      'lp-distribution.abi.json',
    );

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }

  stakingDistributionAbi(): any[] {
    const filePath = path.join(
      process.cwd(),
      'src',
      'abi',
      'staking-distribution.abi.json',
    );

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }

  chestAbi(): any[] {
    const filePath = path.join(process.cwd(), 'src', 'abi', 'chest.abi.json');

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }

  governanceAbi(): any[] {
    const filePath = path.join(
      process.cwd(),
      'src',
      'abi',
      'governance.abi.json',
    );

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const response = JSON.parse(fileContent);

    return response.abi;
  }
}
