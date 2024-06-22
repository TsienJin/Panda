/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DbPrismaService } from "../db/db-prisma/db-prisma.service";
import { JwtPayload } from "../../types/auth.jwt.types";
import { Tutor } from "@prisma/client";

@Injectable()
export class TutorService {
    constructor(
        private prismaService: DbPrismaService,
    ) {}

    async createTutor(
        jwt: JwtPayload
    ): Promise<Tutor>{
        return this.prismaService.prisma.tutor.create({
            data: {
                firstName: jwt.firstName,
                lastName: jwt.lastName,
                email: jwt.email,
                password: undefined,
            }
        });
    }
}