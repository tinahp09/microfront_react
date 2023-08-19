import { Prisma } from "@prisma/client";
export declare class Users implements Prisma.UsersCreateInput {
    name: string;
    password: string;
    username: string;
    email: string;
}
