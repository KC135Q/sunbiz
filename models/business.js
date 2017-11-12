module.exports = function (sequelize, DataTypes) {
    // const Business = sequelize.define("Business", {
    //     name: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     }
    // });
    //
    // // Business.associate = function (models) {
    // //     Business.belongsToMany(models.Agent, {
    // //         foreignKey: {
    // //             allowNull: false
    // //         },
    // //         through: 'AgentBusiness'
    // //     });
    // // };
    //
    // return Business;

    const Business = sequelize.define('business', {
        name: DataTypes.STRING
    });

    Business.associate = function (models) {
        Business.belongsToMany(models.agent, {
            through: {
                model: models.agent_business,
                unique: false
            },
            foreignKey: 'agent_id',
            constraints: false
        });
    }

    return Business;
};
