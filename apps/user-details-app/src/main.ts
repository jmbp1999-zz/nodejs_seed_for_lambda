import { NestFactory } from '@nestjs/core';
import { UserDetailsAppModule } from './user-details-app.module';

async function bootstrap() {
  const app = await NestFactory.create(UserDetailsAppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
