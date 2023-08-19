import { PrismaService } from "src/prisma.service";
import { Users } from "./users.model";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUser(): Promise<Users[]>;
    createUser(data: Users): Promise<Users>;
}
