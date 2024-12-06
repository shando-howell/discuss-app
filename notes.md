<!-- Install these third party libraries -->
npm install @nextui-org/react framer-motion --legacy-peer-deps
npm i @prisma/client@5.22.0 --legacy-peer-deps
npm install --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3
npm install zod

<!-- Initialize prisma command -->
npx prisma init --datasource-provider sqlite

<!-- Cheate database command -->
npx prisma migrate dev

<!-- Download the Prisma schema file and replace the default one -->
schema.prisma

<!-- OAuth -->
Create an OAuth app and generate client_id and client_secret
github.com/settings/applications/new