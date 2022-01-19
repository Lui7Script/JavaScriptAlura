 1.

const alunos = [ 'Joao', 'Juliana', 'Caio','Ana']
  const mediaDosAlunos = [ 10,7,9,6]

  let ListaDeNotasEAlunos = [alunos,mediaDosAlunos]

  const exibirNomeENota = (nomeDoAluno) =>{
       
    if (ListaDeNotasEAlunos[0].includes(nomeDoAluno)) { 
        let indice = ListaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return ListaDeNotasEAlunos[0][indice]  + " sua média é " +
        ListaDeNotasEAlunos[1][indice]        
    } else{

        return "Aluno não cadastrado!!!"
    }  
  } 
  //console.log(exibirNomeENota("Juliana"))        
  
   
  

2.//ABAIXO TEMOS OUTRO EXEMPLO//

  const salas = ["sala1","sala2","sala3","sala4","sala5","sala6","sala7","sala8"]
  const professores=["Pedro","Marcos","Guilherme","João","Maria","Neuza","Luiz","Tereza"]
  
  let salasProfessores = [salas,professores]

  const alunoSala=(nomeDoAluno) => {
   
  if(salasProfessores[0].includes(nomeDoAluno)) {
     
  let indice = salasProfessores[0].indexOf(nomeDoAluno)
    
  return  salasProfessores[1][indice] + " sua sala é a  " + salasProfessores[0][indice]
   
  }else{

       return " Aluno não está matriculado em nenhuma sala "
   }
  } 
 //  console.log(alunoSala("sala1"))