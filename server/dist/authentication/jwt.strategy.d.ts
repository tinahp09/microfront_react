import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    validate(payload: {
        username: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        password: string;
        username: string;
        email: string;
    }, unknown> & {}>;
}
export {};
