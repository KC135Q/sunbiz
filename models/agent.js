module.exports = function (sequelize, DataTypes) {
    // const Agent = sequelize.define("Agent", {
    //     name: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     }
    // });
    //
    // // Agent.associate = function (models) {
    // //     Agent.belongsToMany(models.Business, {
    // //         foreignKey: {
    // //             allowNull: false
    // //         },
    // //         through: 'AgentBusiness'
    // //     });
    // // };
    //
    // return Agent;

    const Agent = sequelize.define('agent', {
        name: DataTypes.STRING
    });

    Agent.associate = function(models) {
        Agent.belongsToMany(models.business, {
            through: {
                model: models.agent_business,
                unique: false,
                scope: {
                    taggable: 'author'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
    }

    return Agent;

};