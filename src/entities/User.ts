import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

export enum UserType {
  ADMIN = 'admin',
  DEFAULT = 'default'
}

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column('enum', { enum: UserType, default: UserType.DEFAULT })
  type: UserType

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
