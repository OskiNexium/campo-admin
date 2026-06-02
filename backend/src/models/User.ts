import { DataTypes, Model, Sequelize } from 'sequelize';

export interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: 'admin' | 'manager' | 'worker';
  phone?: string;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public first_name!: string;
  public last_name!: string;
  public role!: 'admin' | 'manager' | 'worker';
  public phone?: string;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        first_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM('admin', 'manager', 'worker'),
          defaultValue: 'user',
        },
        phone: {
          type: DataTypes.STRING(20),
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
      }
    );
  }
}
