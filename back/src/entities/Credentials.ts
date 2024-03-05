import { Entity,PrimaryGeneratedColumn, Column, ManyToOne ,JoinColumn} from "typeorm";
import { User } from "./User";


@Entity({ name: "credentials"})
    
    export class Credentials{
        
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column({length: 100})
        username: string;
      
        @Column({length: 100}) 
        password: string;
      

        @ManyToOne(() => User)
        @JoinColumn({ name: "userId" })
        userId: User;
        
        


      }



