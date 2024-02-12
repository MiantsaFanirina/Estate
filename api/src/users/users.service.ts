import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from 'src/database/database.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {

  constructor(private readonly databaseService: DatabaseService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.databaseService.user.findUnique({ where: { email } })
    if (!user) {
      return {user: false, password: false}
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (isPasswordValid) {
      const register = this.jwtService.sign({id: user.id})
      return {userId: user.id, register}
    }
    else {
      return {user: true, password: false}
    }
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    console.log(createUserDto)
    const {username, email, password} = createUserDto

    const passwordHash = await bcrypt.hash(password, 10)

    // Create the user
    const createdUser = await this.databaseService.user.create({ data: { username: username, email: email, password: passwordHash } })

    // Create an account for the user
    const createdAccount = await this.databaseService.account.create({
      data: {
        type: 'personal',
        balance: 0, 
        owner: { connect: { id: createdUser.id } } 
      }
    })

    if(!createdUser) {
      return new Error('User not created')
    }
    else {
      const register = this.jwtService.sign({id: createdUser.id})
      return {userId: createdUser.id, register}
    }

  }

  async findAll() {
    const usersWithAccounts = await this.databaseService.user.findMany({
      include: {
        accounts: true
      }
    })

    return usersWithAccounts
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({ where: { id } })
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    })
  }

  async remove(id: number) {
    // Find the user by ID
    const user = await this.databaseService.user.findUnique({
      where: { id },
      include: { accounts: true } // Include user's accounts
    })
  
    if (!user) {
      throw new Error('User not found')
    }
  
    // Delete all related accounts
    await this.databaseService.account.deleteMany({
      where: { ownerId: id }
    })
  
    // Delete the user
    await this.databaseService.user.delete({
      where: { id }
    })
  
    return user // Return the deleted user
  }
}