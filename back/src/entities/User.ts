import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users"})//! SIEMPRE EN PLURAL
export class User {
  @PrimaryGeneratedColumn()//! autoincremental
  id: number;

  @Column({length: 100})
  name: string;

  @Column({length: 100}) 
  email: string;

  @Column() 
  birthdate: string;

  @Column("integer") 
  nDni: number;

  @Column() 
  credencialsId: number;

}
