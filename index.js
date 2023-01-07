const { gql, ApolloServer } = require("apollo-server");
const nodemon = require("nodemon");

const perfis = [
    {id: 1, descricao: "ADMIN"},
    {id: 2, descricao: "NORMAL"}
] 
    

const db = [{
    id: 1,
    nome: 'Paulo',
    email: "paulo@email.com",
    telefone: "11 1111 1111",
    perfil: 1
},{
    id: 1,
    nome: 'Jose',
    email: "jose@email.com",
    telefone: "12 1212 1111",
    perfil: 2
}
]

const typeDefs = gql`

    type Usuario {
        id: Int,
        nome: String,
        email: String,
        telefone: String,
        perfil: Perfil
    }

    type Perfil{
        id: Int,
        descricao: String
    }
    type Query{
        usuario(id: Int): Usuario,
        perfis: [Perfil],
        usuarios: [Usuario]
    }
`;

const resolvers = {
    Usuario: {
        perfil(usuario){
            return perfis.find((p) => p.id === usuario.perfil);
        }
    },
    Query: {
        usuario(_,args){
            return db.find(db => db.id === args.id);
        },
        perfis(){
            return perfis;
        },
        usuarios: () => db.usuarios,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()