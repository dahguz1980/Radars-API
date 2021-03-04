module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("TEAM", {
      NAME: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            notNull: true,
            len: {args: [3,20],
                msg: "El nombre no debe ser vacio y debe tener un tamaño entre 3 y 20 caracteres"
            },
        }
      }, 
      ACTIVE: {
          type: Sequelize.NUMBER,
          default:1,
          allowNull: false,
          validate: { 
            notNull: true,
          }
      }
    },
    {
        tableName: 'TEAM',
        timestamps: false
    });
  
    return Team;
  };