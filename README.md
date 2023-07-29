# Cutest Pokémon

A project developed to practice with tRPC and Prisma. Vote for the cutest Pokémon. Based on [Theo's](https://www.youtube.com/watch?v=PKy2lYEnhgs) tutorial but adapted to my taste with styled components and different project structure.

## Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [styled components](https://styled-components.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)

### Prerequisites

- [PostgreSQL](https://www.postgresql.org/) local database or any cloud PostgreSQL provider. I'm using [Railway.app](https://railway.app).

### Environment variables

| Assuming you have already cloned this repository

Setup environment variables:

```
cp .env.example .env
```

Set database URLs according to your setup (depends if hosted locally or in cloud)

### Installation

When you have all prerequisites ready, you can install and start the application following these steps:

1. Install all dependencies - `npm install` or `pnpm install`
2. Push Prisma schema to your database - `npx prisma db push` or `pnpx prisma db push`
3. Seed the database - `npm run db:seed` or `pnpm run db:seed`
4. Run dev server - `npm run dev` or `pnpm run dev`

## Contributing

To start contributing to this project:

1. Clone the repository
2. Create a new branch - `git checkout -b feature/feature-name`
3. Commit your changes - `git commit -m 'feat: add my cool feature'`
4. Push to the branch - `git push origin feature/feature-name`
5. Open a Pull Request
