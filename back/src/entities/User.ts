import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credentials } from "./Credentials";

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

  @PrimaryGeneratedColumn() 
  credencialsId: number;

  @OneToMany(()=> Appointment, (appointment) =>appointment.user)
  appointments: Appointment[]
}
