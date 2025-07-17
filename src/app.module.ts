import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsrModule } from './usr/usr.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UsrModule, BookmarkModule],
})
export class AppModule {}
