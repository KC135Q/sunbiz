module.exports = function (sequelize, DataTypes) {
    // const AgentBusiness = sequelize.define("AgentBusiness", {
    //     id : {
    //         type: DataTypes.INTEGER,
    //         primaryKey: true,
    //         autoIncrement: true
    //     },
    //     role: DataTypes.STRING
    // });
    //
    // return AgentBusiness;

    const AgentBusiness = sequelize.define('agent_business', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        business_id: {
            type: DataTypes.INTEGER,
            unique: 'agent_business_taggable'
        },
        role: {
            type: DataTypes.STRING,
            unique: 'agent_business_taggable'
        },
        agent_id: {
            type: DataTypes.INTEGER,
            unique: 'agent_business_taggable',
            references: null
        }
    });

    return AgentBusiness;
};