# Migration `20201007081534-add-bio-to-user`

This migration has been generated by Shaun Church at 10/7/2020, 9:15:34 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "User" ADD COLUMN     "bio" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201007081338-add-user-and-post..20201007081534-add-bio-to-user
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -14,8 +14,9 @@
   id    Int     @id @default(autoincrement())
   email String  @unique
   name  String?
   posts Post[]
+  bio   String?
 }
 model Post {
   id        Int      @id @default(autoincrement())
```


