import {
  Controller,
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { EquipmentService } from './equipment.service';
import { createEq } from './dto/create-eq.dto';
import { updateEq } from './dto/update-eq.dto';
import { Equipment } from '@prisma/client';

@UseGuards(AuthGuard('jwt'))
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  getEqs(@Req() req: Request): Promise<Equipment[]> {
    return this.equipmentService.getEq(req.user.id);
  }

  @Post()
  createEqs(@Req() req: Request, @Body() dto: createEq): Promise<Equipment> {
    return this.equipmentService.createEquipment(req.user.id, dto);
  }

  @Patch(':id')
  updateEquipmentById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) equipmentId: number,
    @Body() dto: updateEq,
  ): Promise<Equipment> {
    return this.equipmentService.updateEqById(req.user.id, equipmentId, dto);
  }

  @Get(':id')
  getEqById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) equipmentId: number,
  ): Promise<Equipment> {
    return this.equipmentService.getEqById(req.user.id, equipmentId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteEqById(
    @Req() req: Request,
    @Param('id', ParseIntPipe) equipmentId: number,
  ): Promise<void> {
    return this.equipmentService.deleteEqById(req.user.id, equipmentId);
  }
}
