// Trilha de Foco 2: Objetos Aninhados e com Métodos
// Dado o objeto desenvolvedor abaixo, escreva uma função getSkill que recebe o objeto e o nome de uma skill (ex: "frontend") e retorna o nível de proficiência naquela skill.
// Escreva uma segunda função addSkill que recebe o objeto, o nome de uma nova skill (ex: "DevOps") e um nível (ex: "Iniciante") e adiciona essa nova skill ao objeto skills.

const desenvolvedor = {
    nome: 'Maria',
    cargo: 'Desenvolvedora Full-Stack',
    empresa: 'Tech Solutions Inc.',
    skills: {
        frontend: 'Avançado',
        backend: 'Intermediário',
        database: 'Intermediário'
    }
};

function getSkill(objeto, skill){
    return console.log(objeto.skills[skill]);
}

function addSkill(objeto, nameSkill, leveSkill){
    objeto.skills[nameSkill] = leveSkill
    return objeto
}

getSkill(desenvolvedor, 'frontend');

addSkill(desenvolvedor,'mobile', 'iniciante');
console.log(desenvolvedor.skills)