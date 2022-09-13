# Cutest Pokémon

A project developed to practice with tRPC and Prisma. Vote for the cutest Pokémon. Based on [Theo's](https://www.youtube.com/watch?v=PKy2lYEnhgs) tutorial but adapted to my taste with styled components and different project structure.

## Built With
- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [styled components](https://styled-components.com/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)

### Prerequisites
- [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) local database or PlanetScale connection using PScale CLI

### Environment variables

| Assuming you have already cloned this repository

Setup environment variables:
```
cp .env.example .env
```
Set database URLs according to your setup (depends if hosted locally or in cloud)

### Installation

When you have all prerequisites ready, you can install and start the application following these steps:

1. Install all dependencies - `yarn`
2. Initialize database - `npx prisma migrate dev`
3. Initialize base data set - `yarn ts-node ./scripts/fill-db.ts`
4. Run dev server - `yarn dev`

## Contributing

To start contributing to this project:

1. Clone the repository
2. Create a new branch -  `git checkout -b feature/feature-name`
3. Commit your changes - `git commit -m 'feat: add my cool feature'`
4. Push to the branch - `git push origin feature/feature-name`
5. Open a Pull Request