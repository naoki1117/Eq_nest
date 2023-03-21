import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createEq } from './dto/create-eq.dto';
import { updateEq } from './dto/update-eq.dto';
import { Equipment } from '@prisma/client';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}

  getEq(userId: number): Promise<Equipment[]> {
    return this.prisma.equipment.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  getEqById(userId: number, eqId: number): Promise<Equipment> {
    return this.prisma.equipment.findFirst({
      where: {
        userId,
        id: eqId,
      },
    });
  }

  async createEquipment(userId: number, dto: createEq): Promise<Equipment> {
    const eq = await this.prisma.equipment.create({
      data: {
        userId,
        ...dto,
        // userId,
        // ...dto,
      },
    });
    return eq;
  }

  async updateEqById(
    userId: number,
    equipmentId: number,
    dto: updateEq,
  ): Promise<Equipment> {
    const equipment = await this.prisma.equipment.findUnique({
      where: {
        id: equipmentId,
      },
    });

    if (!equipment || equipment.userId !== userId)
      throw new ForbiddenException('No Permission to upgrade');

    return this.prisma.equipment.update({
      where: {
        id: equipmentId,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteEqById(userId: number, equipmentId: number): Promise<void> {
    const equipment = await this.prisma.equipment.findUnique({
      where: {
        id: equipmentId,
      },
    });
    if (!equipment || equipment.userId !== userId)
      throw new ForbiddenException('No Permission to Delete');
    await this.prisma.equipment.delete({
      where: {
        id: equipmentId,
      },
    });
  }
}
