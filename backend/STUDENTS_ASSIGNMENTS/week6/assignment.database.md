# NestJS Backend Assignment
## Environment Variables, Providers & Entity Relationships

---

## Submission Rules

- Push your work to GitHub (week6/YOUR_NAME)
> Id you have book module, just update it (from week5 file). Else, copy base code from existing(victor or ezekiel/library) code and build from there. 
- Raise a pr
- Your application must run without errors
- Use proper folder structure
- Use DTOs (with proper validation) correctly
- Use TypeORM properly
- All endpoints must be tested with Postman any tool of your choice

---

# Part 1 - Environment Variables & ConfigService

## Objective

Learn how to:

- Hide sensitive database credentials
- Use `.env` files
- Use `ConfigModule`
- Inject values using `ConfigService`

> ⚠️ This was not covered in class - follow each step carefully.

---

## What Problem Are We Solving?

Right now, your database credentials may look like this inside `app.module.ts`:

```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'libraryApi',
})
```

This is **BAD** practice because:

- Passwords are exposed in your code
- Credentials can accidentally be pushed to GitHub
- Changing environments becomes difficult

Instead, we use **environment variables**.

---

## Step 1 - Install Config Package

```bash
npm install @nestjs/config
```

---

## Step 2 - Create a `.env` File

Create a file in the **root** of your project named `.env` and add:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=libraryApi
```

> 🔒 Replace the values with your actual database credentials.  
> ⚠️ Add `.env` to your `.gitignore` file so it is never pushed to GitHub!

---

## Step 3 - Update `app.module.ts`

Import the following at the top:

```ts
import { ConfigModule, ConfigService } from '@nestjs/config';
```

Then configure your module:

```ts
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule {}
```

---

## Key Concepts Explained

### What is `ConfigService`?

`ConfigService` is a NestJS service that reads values from your `.env` file.

```ts
configService.get<string>('DB_HOST')
// Reads the value of DB_HOST from your .env file
```

### What is `forRootAsync`?

Because we are injecting `ConfigService`, we **must** use `forRootAsync()` instead of `forRoot()`.  
The async version allows dependency injection to work properly.

---

## Your Task for Part 1

Convert **ALL** sensitive database values to environment variables.

Do **NOT** hardcode:
- host
- port
- username
- password
- database name

---

# Part 2 - Users Providers

## Objective

You already have a Users module, service, and controller. Now you will split responsibilities into **separate providers** for each operation.

---

## Required Providers

Create the following four providers:

```
findAllUsersProvider
createUsersProvider
updateUsersProvider
deleteUsersProvider
```

---

## Folder Structure

Your providers should live here:

```
src/
└── users/
    └── providers/
        ├── find-all-users.provider.ts
        ├── create-user.provider.ts
        ├── update-user.provider.ts
        └── delete-user.provider.ts
```

> 💡 **Hint:** Use the NestJS CLI to generate providers quickly:
> ```bash
> nest g pr users/providers/find-all-users.provider
> nest g pr users/providers/create-user.provider
> nest g pr users/providers/update-user.provider
> nest g pr users/providers/delete-user.provider
> ```
> The `nest g pr` command generates a **provider** file with the correct boilerplate - saves time and avoids typos!

---

## Users Entity

Create or update your `Users` entity with the following fields:

| Field     | Type   |
| --------- | ------ |
| id        | number |
| firstname | string |
| lastname  | string |
| email     | string |
| password  | string |

### Email Must Be Unique

```ts
@Column({ unique: true })
email: string;
```

---

## Entity Relationships

A user can add many books. A book belongs to one user.

### In the User Entity

```ts
@OneToMany(() => Books, (book) => book.user)
books: Books[];
```

### In the Books Entity

```ts
@ManyToOne(() => Users, (user) => user.books)
user: Users;
```

---

## DTOs

You **must** create and use DTOs. Required files:

```
create-user.dto.ts
update-user.dto.ts
```

### Example `create-user.dto.ts`

```ts
export class CreateUserDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
```

---

## What Each Provider Should Do

### `FindAllUsersProvider`

Fetches all users from the database.

```ts
return this.usersRepository.find();
```

---

### `CreateUsersProvider`

- Creates a new user
- Checks if the email already exists
- Throws `BadRequestException` if the email is taken

---

### `UpdateUsersProvider`

- Updates an existing user
- Throws `NotFoundException` if the user does not exist

---

### `DeleteUsersProvider`

- Deletes a user
- Throws `NotFoundException` if the user does not exist

---

## Register Providers in `users.module.ts`

Add all providers to the `providers` array:

```ts
providers: [
  UsersService,
  FindAllUsersProvider,
  CreateUsersProvider,
  UpdateUsersProvider,
  DeleteUsersProvider,
]
```

---

## Inject Providers Into `users.service.ts`

```ts
constructor(
  private readonly findAllUsersProvider: FindAllUsersProvider,
  private readonly createUsersProvider: CreateUsersProvider,
  // ... other providers
) {}
```

Then delegate to them inside each service method:

```ts
findAllUsers() {
  return this.findAllUsersProvider.findAllUsers();
}
```

---

## Use Service Inside Controller

```ts
@Get()
findAllUsers() {
  return this.usersService.findAllUsers();
}
```

---

# Part 3 - Map Books to Users

## Objective

Every book must belong to the user who added it.

---

## Update Books Entity

Add the relationship field:

```ts
@ManyToOne(() => Users, (user) => user.books)
user: Users;
```

---

## Update Create Book DTO

Add the `userId` field:

```ts
userId: number;
```

---

## During Book Creation

**Step 1** - Find the user first:

```ts
const user = await this.usersRepository.findOne({
  where: { id: createBookDto.userId },
});
```

**Step 2** - Attach the user to the new book:

```ts
const newBook = this.booksRepository.create({
  ...createBookDto,
  user,
});
```

**Step 3** - Save it:

```ts
await this.booksRepository.save(newBook);
```

---

## Expected Response

When fetching books, each book should include the user who added it:

```json
{
  "id": 1,
  "bookName": "Atomic Habits",
  "author": "James Clear",
  "user": {
    "id": 2,
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

---

# Bonus

Use `class-validator` and validation pipes for:

- Email validation (`@IsEmail()`)
- Minimum password length (`@MinLength(8)`)
- Required fields (`@IsNotEmpty()`)

Install with:

```bash
npm install class-validator class-transformer
```

---

# Grading Checklist

Your submission will be evaluated on:

- [ ] Proper use of `.env`
- [ ] Proper use of `ConfigService`
- [ ] Correct provider architecture
- [ ] DTO usage
- [ ] Entity relationships (`@OneToMany` / `@ManyToOne`)
- [ ] Error handling (`NotFoundException`, `BadRequestException`)
- [ ] Clean code structure
- [ ] TypeORM usage
- [ ] Working CRUD endpoints (tested in Postman / Thunder Client)

---

## Deadline

Submit before the **next class** (latest Thursday 11:59pm).

Good luck 🚀