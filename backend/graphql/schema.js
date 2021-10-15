const { buildSchema } = require('graphql')

// type メソッド名 (検索キー): [返答キー]

const schema = buildSchema(`
  type Member {
    id: Int
    name: String
    gender: String
  }

  type Query {
    members(
      id: Int,
      first: Int,
      name: String,
      gender: String
    ): [Member],
  }

  type Mutation {
    addMember(name: String!, gender: String! ): Member,
    delMember(id: Int!): Member
  }  
`)

module.exports = schema;